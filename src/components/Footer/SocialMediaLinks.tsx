import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiReplDotIt } from 'react-icons/si';

export const SocialMediaLinks: React.FC<ButtonGroupProps> = (
  props: ButtonGroupProps
) => (
  <ButtonGroup variant="ghost" color="gray.300" {...props}>
    <IconButton
      as="a"
      href="https://www.linkedin.com/in/nien-ying-chou-169604186/"
      aria-label="LinkedIn"
      target="_blank"
      aria-hidden
      icon={<FaLinkedin fontSize="32px" />}
    />
    <IconButton
      as="a"
      href="https://github.com/wolfzxcv"
      aria-label="GitHub"
      target="_blank"
      aria-hidden
      icon={<FaGithub fontSize="32px" />}
    />
    <IconButton
      as="a"
      href="https://replit.com/@NienYingChou"
      aria-label="Replit"
      target="_blank"
      aria-hidden
      icon={<SiReplDotIt fontSize="32px" />}
    />
  </ButtonGroup>
);
