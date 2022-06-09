import CurrySauce from '../assets/Sauce/curry.png';
import PestoSauce from '../assets/Sauce/pesto.png';
import TomatoSauce from '../assets/Sauce/tomato-sauce.png';
import SpicySauce from '../assets/Sauce/spicy.png';
import BarbequeSauce from '../assets/Sauce/barbeque.png';
import GarlicSauce from '../assets/Sauce/garlic.png'
import DeepPan from '../assets/Base/thick-dough.png';
import Authentic from '../assets/Base/thin-dough.png';

export default [
    { src: TomatoSauce, src2: TomatoSauce, name: "tomatoSauce", zIndex: "z2", category: "sauce", price: 0 },
    { src: BarbequeSauce, src2: BarbequeSauce, name: "barbeque", zIndex: "z2", category: "sauce", price: 0 },
    { src: CurrySauce, src2: CurrySauce, name: "curry", zIndex: "z2", category: "sauce", price: 0 },
    { src: PestoSauce, src2: PestoSauce, name: "pesto", zIndex: "z2", category: "sauce", price: 0 },
    { src: GarlicSauce, src2: GarlicSauce, name: "garlic", zIndex: "z2", category: "sauce", price: 0 },
    { src: SpicySauce, src2: SpicySauce, name: "spicy", zIndex: "z2", category: "sauce", price: 0 },
    { src: DeepPan, src2: DeepPan, name: "Deeppan", zIndex: "z1", category: "base", price: 7 },
    { src: Authentic, src2: Authentic, name: "Authentic", zIndex: "z1", category: "base", price: 7 },
]