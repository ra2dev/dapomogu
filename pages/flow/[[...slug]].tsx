import React, { useState } from "react";
import { FlowEngine } from "../../components/flow/FlowEngine/FlowEngine";
import { BackgroundGradient } from "../../components/BackgroundGradient";
import { Container } from "../../components/container/Container";

export default function Main() {
  const [next, setNext] = useState(false);
  return (
    <Container>
      <BackgroundGradient />
      <FlowEngine setNext={setNext} next={next} />
    </Container>
  );
}
