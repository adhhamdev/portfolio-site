import { RootUI } from "@/components/component/root-ui";

export default function Home({searchParams}) {
  console.log("wkdkdsk")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(<RootUI />);
    }, 2000);
  });
}
