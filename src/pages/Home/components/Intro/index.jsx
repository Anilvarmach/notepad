import { Box, Typography } from '@mui/material';

import homeStyles from '../../Home.module.scss';

const Intro = () => {
    return (
        <Box className={homeStyles.intro}>
            <Typography className={`${homeStyles.intro_title} into-text`}>Join the paperless revolution: Take notes digitally and save trees the trouble of holding onto your brilliant ideas!</Typography>
        </Box>
    );
};

export default Intro;
