import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const EWCGYNH_BG = '#940ebb';
const EWCGYNH_FOOTER_BG = '#702fe3';
const EWCGYNH_FONT_WHITE = 'white';
const EWCGYNH_FONT_YELLOW = '#feca33';
const EWCGYNH_CONTENT_BG = '#b63fd7';
const EWCGYNH_CONTENT_BORDER = '#cb4688';

const EWCGYNH: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <EWCGYNHBanner />

      <Flex bg={EWCGYNH_BG} color="white" flexDir="column" align="center">
        <EWCGYNHContent />
      </Flex>
      <EWCGYNHButtons />

      <Flex bg={EWCGYNH_BG} height={{ base: '50px', md: '150px' }}></Flex>
      <EWCGYNHRules />
    </>
  );
};

const EWCGYNHBanner: React.FC<{}> = () => (
  <Flex
    minH={{ base: '320px', md: '600px' }}
    bg={EWCGYNH_BG}
    bgImage={{
      base: '/../assets/images/activity_EWCGYNH_M.jpg',
      md: '/../assets/images/activity_EWCGYNH.jpg'
    }}
    bgPosition="top center"
    bgSize="cover"
    bgRepeat="no-repeat"
  ></Flex>
);

const EWCGYNHContent: React.FC<{}> = () => (
  <Box
    mt={{ base: 10, md: 20 }}
    mb={{ base: 10, md: '100px' }}
    fontSize={{ base: '12px', md: '18px' }}
    width={{ base: '80vw', md: '90vw' }}
    maxW={{ base: 'auto', md: '1100px' }}
    textAlign="center"
    lineHeight={{ base: 5, md: 10 }}
  >
    <Box mb={5}>
      Terima kasih atas dukungan Anda untuk WCG MARKETS. Untuk merayakan
      perkembangan perusahaan di Indonesia, kami akan meluncurkan promosi
      berikut ini:
    </Box>

    <Flex
      flexDir="column"
      align="center"
      bg={EWCGYNH_CONTENT_BG}
      border={`1px solid ${EWCGYNH_CONTENT_BORDER}`}
      fontSize="14px"
    >
      <Box color={EWCGYNH_FONT_YELLOW}>Detail Promosi:</Box>
      <Box>
        1. Target Promosi: Semua pelanggan baru Indonesia yang melakukan deposit
        pertama ke akun trading real WCG MARKETS selama periode promosi.
      </Box>
      <Box>
        2. Penawaran Promosi: 10% dari jumlah deposit pertama akan dikreditkan
        ke akun pelanggan sebagai kredit tambahan dengan akses 30 hari. Sebagai
        contoh, deposit $1.000 untuk pertama kalinya untuk mendapatkan kredit
        tambahan $100 dengan akses 30 hari.
      </Box>
    </Flex>
  </Box>
);

const EWCGYNHButtons: React.FC<{}> = () => (
  <Flex
    bg={EWCGYNH_BG}
    color={EWCGYNH_FONT_WHITE}
    flexDir="column"
    justify="center"
    py={'80px'}
    alignItems="center"
    textAlign="center"
    height={{ base: '40px', md: '50px' }}
    fontSize={{ base: '20px', md: '30px' }}
  >
    <Link
      width="80vw"
      maxW="500px"
      textAlign="center"
      py={1}
      m={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={EWCGYNH_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href="/"
      isExternal
    >
      HALAMAN UTAMA SITUS WEB
    </Link>
    <Link
      width="80vw"
      maxW="500px"
      textAlign="center"
      py={1}
      m={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={EWCGYNH_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href={
        'https://clientportal.wcgmarkets-asia.com/register/trader?link_id=vilef578&referrer_id=2237'
      }
      isExternal
    >
      BUKA AKUN SEKARANG
    </Link>
    <Link
      width="80vw"
      maxW="500px"
      textAlign="center"
      py={1}
      m={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={EWCGYNH_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href={links.liveChat}
      isExternal
    >
      LAYANAN PELANGGAN ONLINE
    </Link>
  </Flex>
);

const EWCGYNHRules: React.FC<{}> = () => (
  <Flex bg={EWCGYNH_FOOTER_BG} color={EWCGYNH_FONT_WHITE} justify="center">
    <Stack
      my={'6em'}
      width={{ base: '90vw', md: '80vw' }}
      spacing={{ base: 1, md: 3 }}
      fontSize={{ base: '10px', md: '14px' }}
      textAlign={{ base: 'center', md: 'center' }}
    >
      <Box>● Syarat dan Ketentuan Promosi:</Box>
      <Box>
        1. Promosi ini hanya terbuka untuk pelanggan baru yang belum pernah
        membuka akun real di WCG MARKETS. Pelanggan lama tidak berlaku untuk
        penawaran ini.
      </Box>
      <Box>
        2. Setiap pelanggan hanya dapat berpartisipasi dalam promosi ini sekali.
        Pembukaan akun dan deposit ganda tidak akan dihitung secara kumulatif.
      </Box>
      <Box>
        3. Pelanggan harus menyelesaikan deposit pertama dalam 30 hari setelah
        membuka akun, jika tidak promosi menjadi tidak berlaku.
      </Box>
      <Box>
        4. Jumlah deposit harus $300 atau lebih untuk memenuhi syarat promosi.
      </Box>
      <Box>
        5. Kredit akan disetorkan ke akun pelanggan dalam 3 hari kerja setelah
        deposit.
      </Box>
      <Box>
        6. Penarikan yang dilakukan selama periode promosi akan membatalkan
        kelayakan pelanggan dan jumlah kredit yang telah diberikan akan ditarik
        kembali.
      </Box>
      <Box>
        7. Kredit hanya dapat digunakan untuk trading, tidak bisa diambil.
      </Box>
      <Box>
        8. Kredit dapat digunakan untuk margin anti-kerugian, tetapi kerugian
        yang terjadi harus ditanggung pelanggan sendiri.
      </Box>
      <Box>
        9. Setelah promosi berakhir, semua sisa kredit yang tidak terpakai akan
        ditarik kembali.
      </Box>
      <Box>
        10. Perusahaan berhak mengubah, menghentikan promosi dan menarik kembali
        kredit kapan saja.
      </Box>
      <Box>
        11. Penawaran ini tidak dapat digunakan bersama dengan penawaran promosi
        lainnya dari perusahaan.
      </Box>
      <Box>12. Perusahaan berhak atas interpretasi akhir dari promosi ini.</Box>
      <Box>
        13. Peringatan Investasi Risiko Tinggi: CFD adalah produk keuangan yang
        kompleks, penggunaan leverage dapat menyebabkan kemungkinan kehilangan
        modal awal yang cepat. Anda mungkin diminta untuk menyetor margin
        tambahan. Harap pahami mekanisme produk dan pertimbangkan apakah Anda
        dapat menahan risiko sebelum trading. Harga dan kinerja masa lalu produk
        turunan keuangan tidak menjamin atau menunjukkan tren masa depan. Produk
        keuangan seperti ini mungkin tidak cocok untuk semua investor, harap
        pahami sepenuhnya semua risiko potensial dan minta saran independen jika
        perlu sebelum memasuki pasar.
      </Box>
      <Box>14. Kuota promosi terbatas, first come first served. </Box>
      <Box>
        15. Setiap pelanggan hanya dapat berpartisipasi dalam promosi ini sekali
        dengan satu akun.
      </Box>
      <Box>16. Satu akun trading dapat menerima hadiah maksimal $500.</Box>
      <Box>
        17. WCG akan berhak mengubah atau mengakhiri promosi ini kapan saja.
        Setiap perubahan atau pemberitahuan pengakhiran akan tunduk pada
        pengumuman WCG Markets.
      </Box>
      <Box>
        18. Semua transaksi tidak wajar termasuk scalping melalui order dalam 15
        menit, perdagangan gudang A-B atau menggunakan perangkat lunak eksternal
        atau program komputer lain yang mengakibatkan beberapa akun menggunakan
        alamat IP yang sama untuk memesan secara bersamaan, dan operasi
        mencurigakan lainnya akan dianggap sebagai transaksi yang tidak valid,
        tidak akan dihitung dalam cakupan promosi ini (definisi transaksi tidak
        wajar mengacu pada situs resmi WCG).
      </Box>
    </Stack>
  </Flex>
);

export default EWCGYNH;
