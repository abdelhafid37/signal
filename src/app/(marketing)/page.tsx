import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="p-4">
      <h1>Home</h1>
      <div className="flex items-center gap-4">
        <Button>Click Me</Button>
        <Button variant={"secondary"}>Click Me</Button>
        <Button variant={"ghost"}>Click Me</Button>
      </div>
      <p>----------------------</p>
      <div className="flex items-center gap-4">
        <Button size={"sm"}>Click Me SM</Button>
        <Button variant={"secondary"} size={"sm"}>
          Click Me SM
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Click Me SM
        </Button>
      </div>
    </div>
  );
}
