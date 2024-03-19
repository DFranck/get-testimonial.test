import Header from "@/features/layout/Header";
import type { LayoutParams } from "@/types/next";
export default async function RootLayout(props: LayoutParams<{}>) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
