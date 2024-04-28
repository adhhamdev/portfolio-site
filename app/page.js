import { RootUI } from "@/components/component/root-ui";

export default function Home() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(<RootUI />);
    }, 2000);
  });
}
