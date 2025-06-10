import { useState, useEffect } from "react";

export interface TypingSection {
  readonly text: string;
  readonly speed: number; // milliseconds per character
  readonly delayAfter: number; // delay before starting next section
}

export interface TypingState {
  showName: boolean;
  showRole: boolean;
  showDescription: boolean;
  showButtons: boolean;
  typingIndex: number;
  currentSection: "name" | "role" | "description" | "complete";
}

export const useTypingAnimation = (
  sections: readonly TypingSection[],
  initialDelay: number = 200
) => {
  const [state, setState] = useState<TypingState>({
    showName: false,
    showRole: false,
    showDescription: false,
    showButtons: false,
    typingIndex: 0,
    currentSection: "name",
  });

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    const cleanup = () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };

    const startTypingSequence = () => {
      // Section 1: Name
      const nameTimeout = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          showName: true,
          currentSection: "name",
        }));

        let nameIndex = 0;
        const nameInterval = setInterval(() => {
          setState((prev) => ({ ...prev, typingIndex: nameIndex }));

          if (nameIndex >= sections[0].text.length) {
            clearInterval(nameInterval);

            // Section 2: Role
            const roleTimeout = setTimeout(() => {
              setState((prev) => ({
                ...prev,
                currentSection: "role",
                typingIndex: 0,
              }));
              setTimeout(() => {
                setState((prev) => ({ ...prev, showRole: true }));

                let roleIndex = 0;
                const roleInterval = setInterval(() => {
                  setState((prev) => ({ ...prev, typingIndex: roleIndex }));

                  if (roleIndex >= sections[1].text.length) {
                    clearInterval(roleInterval);

                    // Section 3: Description
                    const descTimeout = setTimeout(() => {
                      setState((prev) => ({
                        ...prev,
                        currentSection: "description",
                        typingIndex: 0,
                      }));
                      setTimeout(() => {
                        setState((prev) => ({
                          ...prev,
                          showDescription: true,
                        }));

                        let descIndex = 0;
                        const descInterval = setInterval(() => {
                          setState((prev) => ({
                            ...prev,
                            typingIndex: descIndex,
                          }));

                          if (descIndex >= sections[2].text.length) {
                            clearInterval(descInterval);

                            // Complete - Show buttons
                            const completeTimeout = setTimeout(() => {
                              setState((prev) => ({
                                ...prev,
                                currentSection: "complete",
                                showButtons: true,
                              }));
                            }, 50);

                            timeouts.push(completeTimeout);
                          }
                          descIndex++;
                        }, sections[2].speed);

                        intervals.push(descInterval);
                      }, 50);
                    }, sections[1].delayAfter);

                    timeouts.push(descTimeout);
                  }
                  roleIndex++;
                }, sections[1].speed);

                intervals.push(roleInterval);
              }, 50);
            }, sections[0].delayAfter);

            timeouts.push(roleTimeout);
          }
          nameIndex++;
        }, sections[0].speed);

        intervals.push(nameInterval);
      }, initialDelay);

      timeouts.push(nameTimeout);
    };

    startTypingSequence();

    return cleanup;
  }, [sections, initialDelay]);

  return state;
};
