import BackgroundVideo from "./components/BackgroundVideo";
import TransparentBackgroundGradient from "./components/TransparentBackgroundGradient";
import TypingMachineText from "./components/TypingMachineText";
import MainCard from "./components/MainCard";

export default function Home() {
  return (
    <>
      <BackgroundVideo source="videos/MarcoKouyate_Website_Background.mp4" />
      <TransparentBackgroundGradient gradient_color="gray-900" />
      <TypingMachineText />
      <MainCard />
    </>
  );
}
