import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useTextRender = (initialText: string, speed: number = 40): [string, string, (node?: Element | null | undefined) => void] => {
  const [fullText, setFullText] = useState(initialText);
  const [text, setText] = useState<string>("");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let currentText = initialText[0];
      let index = 1;
      const textLength = initialText.length;
      const delay = speed;
      setFullText(initialText);

      const timer = setInterval(() => {
        currentText = initialText.slice(0, index);
        setText(currentText);
        index++;

        if (index > textLength) {
          clearInterval(timer);
        }
      }, delay);

      return () => {
        clearInterval(timer);
        setText("");
      };
    } else {
      setText("");
    }
  }, [initialText, inView, speed]);

  return [text, fullText, ref];
};
