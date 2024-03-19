import { createSafeActionClient } from "next-safe-action";
import { currentUser } from "./current-user";

class ActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ActionError";
  }
}

const handleReturnedServerError = (error: Error) => {
  {
    if (error instanceof ActionError) {
      return error.message;
    } else {
      return "an unknown error occurred";
    }
  }
};

export const action = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
});

export const userAction = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
  middleware: async () => {
    const user = currentUser();
    if (!user) {
      throw new ActionError("User not logged in");
    }
    return { user };
  },
});
