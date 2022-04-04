import React, { useState } from "react";
import { FlowEngine } from "../components/flow/FlowEngine/FlowEngine";
import { BlogList } from "../components/blog-list/BlogList";
import { Container } from "../components/container/Container";

export default function Main() {
  const [next, setNext] = useState(false);
  return (
    <Container hasOverlay>
      <FlowEngine setNext={setNext} next={next} />
      {!next && <BlogList />}
    </Container>
  );
}
