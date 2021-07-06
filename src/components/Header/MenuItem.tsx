import { Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { ILinkSource } from './menuList';

interface MenuItemProps {
  href: string;
  text: string;
  isSelected?: string;
  subMenu?: ILinkSource[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  text,
  isSelected,
  subMenu
}: MenuItemProps) => {
  const { t } = useTranslation(['header']);

  console.log(isSelected);

  return (
    <Box flex="column">
      <Box
        fontSize="1.2rem"
        _hover={{ color: 'gray.300', textDecoration: 'underline' }}
      >
        <Link href={href}>{text}</Link>
      </Box>
      {subMenu && subMenu.length && (
        <Box>
          {subMenu.map((each: ILinkSource) => (
            <Box key={each.src}>
              <Link href={each.src}>{t(`header:${each.i18n}`)}</Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuItem;
