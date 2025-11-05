import { useRef, useImperativeHandle, forwardRef } from "react";

// 자식 컴포넌트
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="자식 input 입력하세요"
      className="border p-2"
    />
  );
});

// 부모 컴포넌트
