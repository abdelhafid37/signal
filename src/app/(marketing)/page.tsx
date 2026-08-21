import Container from "@/components/ui/Container";
// import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <Container>
      {/* <h1 className="font-bold tracking-tight text-display-xl font-display">
        Land the inbox.
      </h1> */}

      <Heading as="h1" size={"xl"}>
        Land the inbox.
      </Heading>
      <Heading as="h2" size={"l"}>
        Land the inbox.
      </Heading>
      <Heading as="h3" size={"m"}>
        Land the inbox.
      </Heading>

      {/* <Eyebrow>Creative Portfolio</Eyebrow>
      <div className="p-2 bg-ink">
        <Eyebrow isDark>Creative Portfolio 2</Eyebrow>
      </div> */}
    </Container>
  );
}
