import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';


// ----------------------------------------------------------------------

type Props = {
  author: {
    name: string,
    avatarUrl: string
  };
};

export default function PostAuthor({ author }: Props) {
  const { name, avatarUrl } = author;
  const { currentLang } = useTranslate();

  return (
    <Stack
      direction="row"
      spacing={{ xs: 3, md: 4 }}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Avatar src={avatarUrl} sx={{ width: 96, height: 96 }} />

      <Stack spacing={2}>
        <Stack
          spacing={2}
          alignItems={{ md: 'center' }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5">{name}</Typography>

          </Stack>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} href={currentLang.value === "en" ? social.pathBFS : social.pathW3W}>
                <Iconify icon={social.icon} sx={{ color: social.color }} />
              </IconButton>
            ))}
          </Stack>
        </Stack>

        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {about}
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {quotes}
        </Typography> */}
      </Stack>
    </Stack>
  );
}
