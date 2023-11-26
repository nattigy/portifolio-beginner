import React, {useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: nathnaelakale@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/nattigy",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/nathnael-yewondwosen",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const ref = useRef(null);
  const lastScrollY = useRef(0);

  function handleScroll(){
    const currentScrollY = window.scrollY;

    if (ref.current) {
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        ref.current.style.transform = 'translateY(-200px)';
      } else {
        // Scrolling up
        ref.current.style.transform = 'translateY(0px)';
      }
    }

    lastScrollY.current = currentScrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      // translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={ref}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack>
              {socials.map(s => (
                  <a href={s.url}><FontAwesomeIcon icon={s.icon} size="2x"/></a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a
              href="/#projects-section"
              onClick={(e) => {
              e.preventDefault();
              handleClick("projects")();
            }}
              >
              Projects
            </a>
            <a
                href="/#contactme-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("contactme")();
                }}
            >
              Contact Me
            </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
