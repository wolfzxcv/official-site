import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';

interface NewsCardProps {
  id: number;
  date: string;
  title: string;
  author: string;
  summary?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  date,
  title,
  author,
  summary
}: NewsCardProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'sa';

  return (
    <Flex>
      <Box>{date}</Box>

      <Flex direction="column" textAlign={isArabic ? 'right' : 'left'}>
        <Flex>
          <Box>{title}</Box>
          <Box>{author}</Box>
        </Flex>

        <Box>{summary}</Box>
      </Flex>

      <Box
        onClick={() => {
          console.log(id);
        }}
      >
        Read more
      </Box>
    </Flex>
  );
};

export default NewsCard;
