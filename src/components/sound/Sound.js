import React from 'react'
import useSound from 'use-sound'

const soundUrl = '/sounds/https://www.myinstants.com/instant/whos-that-pokemon-90928/?utm_source=copy&utm_medium=share';

const [play, { stop, isPlaying }] = useSound(soundUrl);

return (
  <PlayButton
    active={isPlaying}
    size={60}
    iconColor="var(--color-background)"
    idleBackgroundColor="var(--color-text)"
    activeBackgroundColor="var(--color-primary)"
    play={play}
    stop={stop}
  />
);
