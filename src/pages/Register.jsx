import React, { useState } from "react";

// ----------------------
// Small presentational components
// ----------------------
function InputField({ label, name, type = "text", value, onChange, error, placeholder, min, hint }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        min={min}
        placeholder={placeholder}
        aria-label={label}
        className={`mt-2 block w-full rounded-xl px-4 py-2 bg-white/6 border ${
          error ? "border-rose-400" : "border-transparent"
        } focus:outline-none focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-300`}
      />
      {hint && <div className="mt-1 text-xs text-slate-300">{hint}</div>}
      {error && <div className="mt-1 text-rose-300 text-xs">{error}</div>}
    </label>
  );
}

function PrimaryButton({ children, submitting }) {
  return (
    <button
      disabled={submitting}
      type="submit"
      className={`w-full inline-flex justify-center items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-lg transition-transform active:scale-95 ${
        submitting ? "bg-indigo-500/60 cursor-not-allowed" : "bg-gradient-to-r from-indigo-600 to-sky-500"
      } text-white`}
    >
      {submitting ? "Creating account..." : children}
    </button>
  );
}

function GenderSelector({ value, onChange, error }) {
  const options = [
    { label: "Male", value: "MALE" },
    { label: "Female", value: "FEMALE" },
    { label: "Other", value: "OTHER" },
  ];

  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-200">Gender</legend>
      <div className="mt-2 flex gap-2 items-center">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex-1 text-center px-3 py-2 rounded-2xl cursor-pointer text-sm select-none border ${
              value === opt.value
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white/6 text-slate-200 border-transparent"
            }`}
          >
            <input
              type="radio"
              name="gender"
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              className="hidden"
            />
            {opt.label}
          </label>
        ))}
      </div>
      {error && <div className="mt-2 text-rose-300 text-xs">{error}</div>}
    </fieldset>
  );
}

function PasswordStrength({ password }) {
  // simple strength heuristic
  let score = 0;
  if (!password) score = 0;
  else {
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
  }
  const pct = (score / 4) * 100;
  const colorClass = score <= 1 ? "bg-rose-400" : score === 2 ? "bg-amber-400" : "bg-emerald-400";

  return (
    <div className="mt-2">
      <div className="h-2 w-full bg-white/8 rounded-full overflow-hidden">
        <div className={`h-full`} style={{ width: `${pct}%` }} classNameOverride={undefined} />
      </div>
      <div className="mt-1 text-xs text-slate-300">{password ? `${Math.round(pct)}% strength` : "Enter a password"}</div>
      <style>{`
        /* inline style for strength bar because we prefer not to hardcode Tailwind width classes */
        .strength-bar { transition: width 220ms ease; height: 100%; }
      `}</style>
    </div>
  );
}

// ----------------------
// Main Register Page
// ----------------------
export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const simpleEmailValid = (email) => {
    if (!email) return false;
    return email.indexOf("@") > 0 && email.lastIndexOf(".") > email.indexOf("@");
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    else if (!simpleEmailValid(form.email)) e.email = "Invalid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Password must be 6+ chars";
    if (!form.age) e.age = "Age is required";
    else if (Number(form.age) < 13) e.age = "You must be at least 13";
    if (!form.gender) e.gender = "Select your gender";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    try {
      // Replace with axios call to your auth API
      await new Promise((r) => setTimeout(r, 800));
      console.log("Register payload:", form);
      alert("Registered (demo). Next: call your registration API.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong — try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-sky-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT - Hero / Branding */}
          <div className="text-center md:text-left px-6 md:px-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Welcome to HealMeet</h2>
                <p className="text-slate-300 mt-1">Connect instantly — private, secure, and delightful.</p>
              </div>
            </div>

            <div className="mt-6 bg-white/6 rounded-2xl p-6 md:p-8 shadow-lg border border-white/8">
              <h3 className="text-white font-semibold">Why join?</h3>
              <ul className="mt-3 text-slate-300 space-y-2 text-sm">
                <li>• 1 day full access free</li>
                <li>• Real people + intelligent fallback AI</li>
                <li>• Secure OTP-based signup</li>
              </ul>
            </div>

            <div className="hidden md:block mt-6 text-slate-300 text-sm">Already have an account? <a href="/login" className="underline text-white">Sign in</a></div>
          </div>

          {/* RIGHT - Form Card */}
          <div className="bg-white/6 p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-semibold text-white">Create your account</h3>
              <p className="text-sm text-slate-300">We’ll send an OTP to your email to verify your account.</p>

              <InputField
                label="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Ankit Kumar"
                error={errors.name}
                hint={null}
              />

              <InputField
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                error={errors.email}
                hint={"We’ll use this to send your OTP"}
              />

              <div>
                <label className="block">
                  <span className="text-sm font-medium text-slate-200">Password</span>
                  <div className="relative mt-2">
                    <input
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className={`w-full rounded-xl px-4 py-2 bg-white/6 border ${
                        errors.password ? "border-rose-400" : "border-transparent"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-300`}
                      placeholder="Choose a strong password"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-2.5 text-sm text-slate-300/90"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && <div className="mt-2 text-rose-300 text-xs">{errors.password}</div>}
                </label>
                {/* visual password strength */}
                <div className="mt-3 h-2 w-full bg-white/8 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${form.password.length >= 8 ? "bg-emerald-400" : "bg-amber-400"}`}
                    style={{ width: `${Math.min(form.password.length * 10, 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Age"
                  name="age"
                  type="number"
                  min={13}
                  value={form.age}
                  onChange={handleChange}
                  placeholder="e.g. 24"
                  error={errors.age}
                />

                <GenderSelector value={form.gender} onChange={handleChange} error={errors.gender} />
              </div>

              <div>
                <PrimaryButton submitting={submitting}>Create account</PrimaryButton>
                <div className="mt-3 text-center text-xs text-slate-300">By creating an account you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy</a>.</div>
              </div>

              <div className="md:hidden text-center text-sm text-slate-200/80">Already have an account? <a href="/login" className="underline">Sign in</a></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
