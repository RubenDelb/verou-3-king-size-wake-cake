import CurrySauce from '../assets/Sauce/curry.webp';
import PestoSauce from '../assets/Sauce/pesto.webp';
import TomatoSauce from '../assets/Sauce/tomato.webp';
import SpicySauce from '../assets/Sauce/spicy.webp';
import EmptyBase from '../assets/Base/PizzaBaseEmpty.webp';


export default [
    { src: CurrySauce, name: "curry", zIndex: "z2", category: "sauce" },
    { src: PestoSauce, name: "pesto", zIndex: "z2", category: "sauce"  },
    { src: TomatoSauce, name: "tomatoSauce", zIndex: "z2", category: "sauce"  },
    { src: SpicySauce, name: "spicy", zIndex: "z2", category: "sauce"  },
    { src: EmptyBase, name: "emptybase", zIndex: "z1", category: "base"  },
]