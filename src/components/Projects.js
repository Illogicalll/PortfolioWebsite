import { useColorMode } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import {
  SimpleGrid,
  Card,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Spacer,
} from "@chakra-ui/react";

export default function Projects() {
  const { colorMode } = useColorMode();

  function redirectPortfolio() {
    window.open("https://github.com/Illogicalll/PortfolioWebsite", "_blank");
  }

  function redirectSolar() {
    window.open(
      "https://github.com/Illogicalll/Solar-System-Simulation",
      "_blank",
    );
  }

  function redirectEcom() {
    window.open("https://beaugoodwin.com/", "_blank", "noreferrer");
  }

  function redirectProj5() {
    window.open("https://github.com/Illogicalll?tab=repositories", "_blank");
  }

  const badgesWidth = isMobile ? "300px" : "500px";

  return (
    <div class="section">
      <Flex
        height="100vh"
        width="100%"
        justify="center"
        align="center"
        padding={"30px"}
      >
        <Flex justify="center" align="center">
          <div>
            <VStack align="center" textAlign={"center"} maxWidth="700px">
              <h1
                class={isMobile ? "section-title-mobile" : "section-title"}
                style={{
                  filter: colorMode === "dark" ? "invert(100%)" : "none",
                }}
              >
                Projects
              </h1>
              <p
                style={{
                  filter: colorMode === "dark" ? "invert(100%)" : "none",
                }}
              >
                {!isMobile ? (
                  <div>
                    Here are some of my projects!
                    <br />
                  </div>
                ) : (
                  ""
                )}
                Whether they be work-related or just for personal enjoyment,{" "}
                <br /> these helped build out my understanding of the following
                languages and frameworks:
                <br />
                <br />{" "}
              </p>
              <SimpleGrid
                spacing={1}
                templateColumns="repeat(auto-fill, minmax(80px, 1fr))"
                maxW={badgesWidth}
              >
                <a
                  href="https://www.python.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"
                    alt="python"
                  />{" "}
                </a>
                <a href="https://openjdk.org/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/OpenJDK-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
                    alt="openjdk"
                  />{" "}
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/HTML"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                    alt="html5"
                  />{" "}
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/CSS"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                    alt="css3"
                  />{" "}
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                    alt="js"
                  />{" "}
                </a>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                    alt="reacy"
                  />{" "}
                </a>
                <a
                  href="https://www.djangoproject.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"
                    alt="django"
                  />{" "}
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    class="badge-image"
                    src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
                    alt="mysql"
                  />{" "}
                </a>
                <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00"
                    class="badge-image"
                    alt="Svelte"
                  />{" "}
                </a>
                <a
                  href="https://kit.svelte.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white"
                    class="badge-image"
                    alt="SvelteKit"
                  />{" "}
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                    class="badge-image"
                    alt="TypeScript"
                  />{" "}
                </a>
                <a
                  href="https://www.sqlite.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"
                    class="badge-image"
                    alt="SQLite"
                  />{" "}
                </a>
                <br />
              </SimpleGrid>
              {isMobile ? (
                <div>
                  <Card
                    variant={"outline"}
                    align="center"
                    style={{
                      backgroundColor:
                        colorMode === "dark" ? "#141313" : "white",
                    }}
                  >
                    <Flex direction={"column"} height="100%" padding="20px">
                      <Heading
                        size="md"
                        style={{
                          paddingBottom: "5px",
                          filter:
                            colorMode === "dark" ? "invert(100%)" : "none",
                        }}
                      >
                        View Here
                      </Heading>
                      <Spacer />
                      <Text
                        style={{
                          paddingBottom: "5px",
                          filter:
                            colorMode === "dark" ? "invert(100%)" : "none",
                        }}
                      >
                        All my projects are available on my Github profile
                      </Text>
                      <Spacer />
                      <Button onClick={redirectProj5}>Github</Button>
                    </Flex>
                  </Card>
                </div>
              ) : (
                <div>
                  <SimpleGrid columns={[1, 2, 4]} spacing={4}>
                    <Card
                      variant={"outline"}
                      align="center"
                      style={{
                        backgroundColor:
                          colorMode === "dark" ? "#141313" : "white",
                      }}
                    >
                      <Flex direction={"column"} height="100%" padding="20px">
                        <Heading
                          size="md"
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          Online Developer Portfolio
                        </Heading>
                        <Spacer />
                        <Text
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          What you're looking at right now :)
                        </Text>
                        <Spacer />
                        <Button onClick={redirectPortfolio}>View here</Button>
                      </Flex>
                    </Card>
                    <Card
                      variant={"outline"}
                      align="center"
                      style={{
                        backgroundColor:
                          colorMode === "dark" ? "#141313" : "white",
                      }}
                    >
                      <Flex direction={"column"} height="100%" padding="20px">
                        <Heading
                          size="md"
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          Solar System Simulation
                        </Heading>
                        <Spacer />
                        <Text
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          Educational tool intended to help GCSE physics
                          students
                        </Text>
                        <Spacer />
                        <Button onClick={redirectSolar}>View here</Button>
                      </Flex>
                    </Card>
                    <Card
                      variant={"outline"}
                      align="center"
                      style={{
                        backgroundColor:
                          colorMode === "dark" ? "#141313" : "white",
                      }}
                    >
                      <Flex direction={"column"} height="100%" padding="20px">
                        <Heading
                          size="md"
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          Music Journalist's Blog
                        </Heading>
                        <Spacer />
                        <Text
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          Personal blog and work portfolio for a client
                        </Text>
                        <Spacer />
                        <Button onClick={redirectEcom}>View here</Button>
                      </Flex>
                    </Card>
                    <Card
                      variant={"outline"}
                      align="center"
                      style={{
                        backgroundColor:
                          colorMode === "dark" ? "#141313" : "white",
                      }}
                    >
                      <Flex direction={"column"} height="100%" padding="20px">
                        <Heading
                          size="md"
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          {isMobile ? "View Here" : "View More Projects Here"}
                        </Heading>
                        <Spacer />
                        <Text
                          style={{
                            paddingBottom: "5px",
                            filter:
                              colorMode === "dark" ? "invert(100%)" : "none",
                          }}
                        >
                          All my projects are available on my Github profile
                        </Text>
                        <Spacer />
                        <Button onClick={redirectProj5}>Github</Button>
                      </Flex>
                    </Card>
                  </SimpleGrid>
                </div>
              )}
            </VStack>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

