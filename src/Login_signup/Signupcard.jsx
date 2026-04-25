import React, { useState } from "react";
import styles from "./Signupcard.module.css";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const GoogleIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const AppleIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

function getPasswordStrength(password) {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
  const passed = Object.values(checks).filter(Boolean).length;
  return { checks, passed };
}

function validatePassword(password) {
  const { checks } = getPasswordStrength(password);
  const errors = [];
  if (!checks.length)    errors.push("At least 8 characters");
  if (!checks.uppercase) errors.push("One uppercase letter");
  if (!checks.lowercase) errors.push("One lowercase letter");
  if (!checks.number)    errors.push("One number");
  if (!checks.special)   errors.push("One special character (!@#$...)");
  return errors;
}

export default function CreateAccount(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { checks, passed } = getPasswordStrength(password);

  const strengthLabel = ["", "Weak", "Weak", "Fair", "Good", "Strong"][passed];
  const strengthColor = ["", "#e53935", "#e53935", "#fb8c00", "#43a047", "#2ecc71"][passed];

  function signup(event) {
    event.preventDefault();

    const firstname = event.target.firstname.value.trim();
    const lastname = event.target.lastname.value.trim();
    const email = event.target.email.value.trim();

    if (!firstname || !lastname) {
      setError("First and last name are required.");
      return;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError("Password must include: " + passwordErrors.join(", ") + ".");
      return;
    }

    const user = { firstname, lastname, password, email };
    localStorage.setItem("user", JSON.stringify(user));

    setError("");

    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imagePanel}>
        <div className={styles.imagePlaceholder} />
        <div className={styles.slideIndicators}>
          <div className={`${styles.dot} ${styles.dotActive}`} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </div>

      <div className={styles.formPanel}>
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.subtitle}>
          Already have an account?{" "}
          <span className={styles.loginLink} onClick={props.onClick}>
            Log in
          </span>
        </p>

        <form onSubmit={signup}>
          <div className={styles.row}>
            <input
              className={`${styles.input} ${styles.inputActive}`}
              type="text"
              placeholder="First Name"
              name="firstname"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Last Name"
              name="lastname"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>

          <div className={`${styles.inputGroup} ${styles.passwordWrapper}`}>
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className={styles.eyeButton}
              type="button"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          {/* Password strength bar */}
          {password.length > 0 && (
            <div className={styles.strengthWrapper}>
              <div className={styles.strengthBar}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={styles.strengthSegment}
                    style={{ background: i <= passed ? strengthColor : "#e0e0e0" }}
                  />
                ))}
              </div>
              <span className={styles.strengthLabel} style={{ color: strengthColor }}>
                {strengthLabel}
              </span>
            </div>
          )}

          {/* Per-rule checklist */}
          {password.length > 0 && (
            <ul className={styles.ruleList}>
              {[
                { key: "length",    label: "8+ characters" },
                { key: "uppercase", label: "Uppercase letter" },
                { key: "lowercase", label: "Lowercase letter" },
                { key: "number",    label: "Number" },
                { key: "special",   label: "Special character" },
              ].map(({ key, label }) => (
                <li key={key} className={styles.ruleItem} style={{ color: checks[key] ? "#2ecc71" : "#aaa" }}>
                  {checks[key] ? "✓" : "○"} {label}
                </li>
              ))}
            </ul>
          )}

          {error && <p className={styles.errorText}>{error}</p>}

          <div className={styles.checkboxRow}>
            <input className={styles.checkbox} type="checkbox" id="terms" required />
            <label className={styles.checkboxLabel} htmlFor="terms">
              I agree to the{" "}
              <span className={styles.termsLink}>terms &amp; conditions</span>
            </label>
          </div>

          <button className={styles.createButton} type="submit">
            Create account
          </button>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>Or register with</span>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.socialRow}>
            <button className={styles.socialButton} type="button"><GoogleIcon />Google</button>
            <button className={styles.socialButton} type="button"><AppleIcon />Apple</button>
          </div>
        </form>
      </div>
    </div>
  );
}