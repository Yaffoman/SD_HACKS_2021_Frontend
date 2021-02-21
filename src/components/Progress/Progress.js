import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function Progress({percentage}) {
    return (
        <>
            <Box position="relative" display="inline-flex">
                <CircularProgress size={'30rem'} color={"secondary"} variant={"determinate"} value={percentage}/>
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h2" component="div" color="textSecondary">{`${Math.round(
                        percentage,
                    )}%`}</Typography>
                </Box>
            </Box>
        </>
    )
}