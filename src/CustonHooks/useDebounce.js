
//   function useDebounce (value, delay = 500)  {
//   const [debouncedValue, setDebouncedValue] = useState("");
//   const timerRef = useRef();

//   useEffect(() => {
//     timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

//     return () => {
//       clearTimeout(timerRef.current);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };
export  default function useDebounce(cb, delay = 300) {
    let timeout;
    
    return (...arg) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...arg);
      }, delay);
    };
  }
