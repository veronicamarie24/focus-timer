import { useState } from "react";
import StartSessionForm from "./StartSessionForm";
import SessionTimer from "./SessionTimer";

export type Session = {
  id: string;
  startTime: Date;
  endTime?: Date;
  duration: number; // seconds
  timerCheckIn: Date;
  completed: boolean;
  createdAt: Date;
  taskId?: string;
};

const FocusSession: React.FC = () => {
  const [session, setSession] = useState<Session | undefined>();

  const handleSetSession = (session: Session) => {
    setSession(session);
  };
  return (
    <div style={{ display: "flex" }}>
      <StartSessionForm setSession={handleSetSession} />
      {session && <SessionTimer session={session} />}
    </div>
  );
};

export default FocusSession;
