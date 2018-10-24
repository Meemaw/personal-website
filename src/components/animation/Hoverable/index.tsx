import posed from 'react-pose';

type Props = {
  hoverable?: boolean;
  pressable?: boolean;
  initConfig?: EventConfig;
  hoverConfig?: EventConfig;
  pressConfig?: EventConfig;
};

type EventConfig = {
  scale: number;
  boxShadow: string;
};

const getHoverable = ({
  hoverable = true,
  initConfig = {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hoverConfig,
  pressConfig,
}: Props) =>
  posed.div({
    hoverable,
    pressable: pressConfig !== undefined,
    init: initConfig,
    hover: hoverConfig,
    press: pressConfig,
  });

const Hoverable = getHoverable({
  hoverConfig: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  pressConfig: {
    scale: 1.2,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  },
});

export default Hoverable;
