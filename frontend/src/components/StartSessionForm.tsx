import { useState } from "react";
import { minutesToSeconds } from "../util";
import type { Session } from "./FocusSession";

type FocusSessionFormData = {
  durationMinutes: string;
};

type StartSessionFormProps = {
  setSession: (session: Session) => void;
};

const StartSessionForm: React.FC<StartSessionFormProps> = (
  props: StartSessionFormProps
) => {
  const { setSession } = props;
  const [formData, setFormData] = useState<FocusSessionFormData>({
    durationMinutes: "30",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeDuration = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("setting duration");
    setFormData((prev) => ({ ...prev, durationMinutes: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          duration: minutesToSeconds(
            parseInt(formData.durationMinutes)
          ).toString(),
        }),
      });
      if (!res.ok) {
        throw new Error();
      }

      const data = (await res.json()) as Session;
      setSession(data);
    } catch {
      setErrorMessage("Failed to start session.");
    }
  };

  const durations = ["15", "30", "45", "60"];

  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="duration">Duration</label>
        <select
          name="duration"
          value={formData.durationMinutes}
          onChange={handleChangeDuration}
        >
          {durations.map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
        <button type="submit">Start Session</button>
      </form>

      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default StartSessionForm;
