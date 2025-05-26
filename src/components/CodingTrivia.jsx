import React, { useState, useEffect, useRef } from "react";
import "./CodingTrivia.css";

// Add your comprehensionQuestions, codingChallenges, mentorPraises arrays here

const themeOptions = [
  { value: "ubuntu", label: "Ubuntu Terminal" },
  { value: "cyber", label: "Cyber Masters" },
  { value: "powershell", label: "PowerShell" },
  { value: "bw", label: "Black & White" }
];

const themeVars = {
  ubuntu: {
    "--primary-accent": "#e95420",
    "--primary-accent-rgb": "233, 84, 32",
    "--success-accent": "#77216f",
    "--success-accent-rgb": "119, 33, 111",
    "--terminal-bg": "#300a24",
    "--terminal-surface": "#2c001e",
    "--terminal-border": "#77216f",
    "--terminal-text": "#eeeeec",
    "--terminal-text-muted": "#ad7fa8"
  },
  cyber: {
    "--primary-accent": "#00d9ff",
    "--primary-accent-rgb": "0, 217, 255",
    "--success-accent": "#00ff88",
    "--success-accent-rgb": "0, 255, 136",
    "--terminal-bg": "#0d1117",
    "--terminal-surface": "#161b22",
    "--terminal-border": "#30363d",
    "--terminal-text": "#e6edf3",
    "--terminal-text-muted": "#7d8590"
  },
  powershell: {
    "--primary-accent": "#00bcf2",
    "--primary-accent-rgb": "0, 188, 242",
    "--success-accent": "#003776",
    "--success-accent-rgb": "0, 55, 118",
    "--terminal-bg": "#012456",
    "--terminal-surface": "#001a33",
    "--terminal-border": "#00bcf2",
    "--terminal-text": "#e5f6fd",
    "--terminal-text-muted": "#7fdbff"
  },
  bw: {
    "--primary-accent": "#fff",
    "--primary-accent-rgb": "255, 255, 255",
    "--success-accent": "#fff",
    "--success-accent-rgb": "255, 255, 255",
    "--terminal-bg": "#111",
    "--terminal-surface": "#181818",
    "--terminal-border": "#fff",
    "--terminal-text": "#fff",
    "--terminal-text-muted": "#bbb"
  }
};

const comprehensionQuestions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler"],
    answer: "Hyper Text Markup Language",
    explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages."
  },
  // ...add more questions
];

const codingChallenges = [
  {
    prompt: "Write a function that returns the sum of two numbers.",
    starterCode: "function sum(a, b) {\n  // your code here\n}",
    answer: "function sum(a, b) {\n  return a + b;\n}",
    explanation: "You simply return the sum of the two parameters.",
    validate: code => /return\s+a\s*\+\s*b\s*;?/i.test(code)
  },
  // ...add more challenges
];

const mentorPraises = [
  "Great job!",
  "You're on fire!",
  "Keep it up!",
  "Excellent work!",
  "You're mastering this!"
];

const CodingTrivia = () => {
  const [mode, setMode] = useState("comprehension");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [theme, setTheme] = useState("cyber");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const confettiCanvasRef = useRef(null);
  const confettiTimeout = useRef(null);
  const triviaRef = useRef();

  const questionSet = mode === "comprehension" ? comprehensionQuestions : codingChallenges;
  const current = questionSet[questionIndex];

  // Confetti logic (simplified for brevity)
  class ConfettiPiece {
    constructor(canvasWidth, canvasHeight) {
      this.x = Math.random() * canvasWidth;
      this.y = Math.random() * canvasHeight - canvasHeight;
      this.radius = 5 + Math.random() * 8;
      this.size = 8 + Math.random() * 12;
      this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
      this.speedY = 2 + Math.random() * 3;
      this.speedX = (Math.random() - 0.5) * 2.5;
      this.opacity = 1;
      this.fadeSpeed = 0.008 + Math.random() * 0.012;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 12;
      this.shape = Math.random() > 0.5 ? "circle" : "rect";
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;
      this.opacity -= this.fadeSpeed;
      if (this.opacity < 0) this.opacity = 0;
    }
    draw(ctx) {
      if (this.opacity <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;
      if (this.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      }
      ctx.restore();
    }
  }

  const confettiPieces = useRef([]);
  const animationFrameId = useRef(null);

  const startConfetti = () => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const W = canvas.width;
    const H = canvas.height;
    confettiPieces.current = [];
    for (let i = 0; i < 300; i++) {
      confettiPieces.current.push(new ConfettiPiece(W, H));
    }
    let frame = 0;
    const render = () => {
      ctx.clearRect(0, 0, W, H);
      confettiPieces.current.forEach((piece) => {
        piece.update();
        piece.draw(ctx);
      });
      confettiPieces.current = confettiPieces.current.filter(p => p.opacity > 0);
      if (frame < 30) {
        for (let i = 0; i < 10; i++) {
          confettiPieces.current.push(new ConfettiPiece(W, H));
        }
      }
      frame++;
      if (confettiPieces.current.length > 0) {
        animationFrameId.current = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, W, H);
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    render();
  };

  const triggerSuccess = () => {
    setShowSuccess(true);
    startConfetti();
    if (confettiTimeout.current) clearTimeout(confettiTimeout.current);
    confettiTimeout.current = setTimeout(() => {
      setShowSuccess(false);
      confettiPieces.current = [];
    }, 4000);
  };

  const handleAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    setShowWhy(false);
    if (option === current.answer) {
      triggerSuccess();
      setFeedbackMessage("");
    } else {
      setFeedbackMessage("Not quite right!");
    }
  };

  const handleCodeSubmit = () => {
    if (current.validate(codeInput)) {
      triggerSuccess();
      setFeedbackMessage("");
      setShowAnswer(true);
    } else {
      setFeedbackMessage("Not quite right! Try again.");
      setShowAnswer(true);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowWhy(false);
    setShowAnswer(false);
    setCodeInput("");
    setFeedbackMessage("");
    setQuestionIndex((prev) => (prev + 1) % questionSet.length);
  };

  const handleSkip = () => {
    setSelected(null);
    setShowAnswer(false);
    setShowWhy(false);
    setCodeInput("");
    setFeedbackMessage("");
    setQuestionIndex((prev) => (prev + 1) % questionSet.length);
  };

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      console.log("New subscriber:", email);
    }
  };

  useEffect(() => {
    const root = triviaRef.current;
    const vars = themeVars[theme];
    for (const key in vars) {
      root.style.setProperty(key, vars[key]);
    }
  }, [theme]);

  return (
    <div ref={triviaRef} className={`trivia-root theme-${theme}`} data-theme={theme}>
      <div className="trivia-container">
        <canvas ref={confettiCanvasRef} className="confetti-canvas" />
        <div className="terminal-header" aria-label="Terminal header with window controls and theme toggle">
          <div className="terminal-dots" aria-hidden="true">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
          </div>
          <div className="theme-dropdown-container">
            <select
              className="theme-dropdown"
              value={theme}
              onChange={e => setTheme(e.target.value)}
              aria-label="Choose terminal color scheme"
            >
              {themeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mode-toggle" role="tablist" aria-label="Select question mode">
          <button
            className={mode === "comprehension" ? "active" : ""}
            onClick={() => {
              setMode("comprehension");
              setSelected(null);
              setShowAnswer(false);
              setShowWhy(false);
              setQuestionIndex(0);
              setFeedbackMessage("");
            }}
            role="tab"
            aria-selected={mode === "comprehension"}
            tabIndex={mode === "comprehension" ? 0 : -1}
          >
            Comprehension
          </button>
          <button
            className={mode === "coding" ? "active" : ""}
            onClick={() => {
              setMode("coding");
              setSelected(null);
              setShowAnswer(false);
              setShowWhy(false);
              setQuestionIndex(0);
              setFeedbackMessage("");
            }}
            role="tab"
            aria-selected={mode === "coding"}
            tabIndex={mode === "coding" ? 0 : -1}
          >
            Code Challenge
          </button>
        </div>

        <div className="question-box" role="main" aria-live="polite">
          <h2>{mode === "comprehension" ? current.question : current.prompt}</h2>

          {mode === "comprehension" ? (
            current.options.map((option) => (
              <button
                key={option}
                className={`option ${selected === option ? "selected" : ""}`}
                onClick={() => handleAnswer(option)}
                disabled={!!selected}
                type="button"
                aria-pressed={selected === option}
              >
                {option}
              </button>
            ))
          ) : (
            <>
              <pre className="code-stub">{current.starterCode}</pre>
              <textarea
                className="code-input"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="// type your code..."
                spellCheck={false}
                aria-label="Code input area"
              />
              <button className="run-code-btn" onClick={handleCodeSubmit} type="button">
                Run Code
              </button>
            </>
          )}

          {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}

          <div className="actions">
            <button
              onClick={() => setShowWhy((v) => !v)}
              disabled={mode === "coding" && !showAnswer && !selected}
              type="button"
            >
              Why?
            </button>
            <button
              onClick={() => setShowAnswer((v) => !v)}
              type="button"
              aria-pressed={showAnswer}
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
            <button onClick={handleSkip} type="button">Skip</button>
            <button onClick={handleNext} type="button">Next</button>
          </div>

          {showWhy && <div className="explanation">{current.explanation}</div>}

          {showAnswer && (
            <div className="answer">
              <strong>Correct Answer:</strong>{" "}
              {mode === "comprehension"
                ? current.answer
                : current.answer
                  ? <pre>{current.answer}</pre>
                  : "See explanation above."}
            </div>
          )}

          {showSuccess && (
            <div className="success-banner" role="alert" aria-live="assertive">
              ✅ SUCCESS! {mentorPraises[Math.floor(Math.random() * mentorPraises.length)]}
            </div>
          )}
        </div>
      </div>

      {/* Fixed footer for email subscription */}
      <footer className="email-footer" role="contentinfo">
        <div className="email-footer-content">
          <h4>
            <span className="email-emoji" aria-hidden="true">📬</span>
            <span className="email-title-text">Join our <span className="highlight">Email List</span></span>
            <span className="email-emoji" aria-hidden="true">🚀</span>
          </h4>
          <div className="email-subtext">
            <span>Get coding tips, new challenges, and exclusive updates.</span>
          </div>
        </div>
        {!subscribed ? (
          <div className="email-input-container terminal-input">
            <span className="prompt-sign">$</span>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address input"
              autoComplete="email"
            />
            <button onClick={handleSubscribe} disabled={subscribed} type="button" aria-live="polite" aria-disabled={subscribed}>
              {subscribed ? "Subscribed" : "Join"}
            </button>
          </div>
        ) : (
          <div className="subscribed-msg">🎉 You're subscribed!</div>
        )}
      </footer>
    </div>
  );
};

export default CodingTrivia;