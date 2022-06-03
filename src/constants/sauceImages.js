import CurrySauce from '../assets/Sauce/curry.png';
import PestoSauce from '../assets/Sauce/pesto.png';
import TomatoSauce from '../assets/Sauce/tomato-sauce.png';
import SpicySauce from '../assets/Sauce/spicy.png';
import DeepPan from '../assets/Base/thick-dough.png';
import Authentic from '../assets/Base/thin-dough.png';

export default [
    { src: CurrySauce, src2: CurrySauce, name: "curry", zIndex: "z2", category: "sauce" },
    { src: PestoSauce, src2: PestoSauce, name: "pesto", zIndex: "z2", category: "sauce"  },
    { src: TomatoSauce, src2: TomatoSauce, name: "tomatoSauce", zIndex: "z2", category: "sauce"  },
    { src: SpicySauce, src2: SpicySauce, name: "spicy", zIndex: "z2", category: "sauce"  },
    { src: DeepPan, src2: DeepPan, name: "Deeppan", zIndex: "z1", category: "base" },
    { src: Authentic, src2: Authentic, name: "Authentic", zIndex: "z1", category: "base" },
]