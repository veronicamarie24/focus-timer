import { useEffect, useState } from "react";
import type { Session } from "./FocusSession";

type SessionTimerProps = {
  session: Session;
};

const SessionTimer: React.FC<SessionTimerProps> = (
  props: SessionTimerProps
) => {
  const { session } = props;
  const [secondsLeft, setSecondsLeft] = useState(session.duration);

  // send heartbeat to the server as long as timer is still going
  // send every 30 seconds

  // update minutes and seconds
  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60).toString();
  const seconds = (secondsLeft % 60).toString();

  return (
    <div>
      <div>
        {minutes}:{seconds}
      </div>
      <div>
        <button>Start</button>
        <button>Pause</button>
        <button>Stop</button>
      </div>
    </div>
  );
};

export default SessionTimer;
