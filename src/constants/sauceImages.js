import CurrySauce from '../assets/Sauce/curry.webp';
import PestoSauce from '../assets/Sauce/pesto.webp';
import TomatoSauce from '../assets/Sauce/tomato-sauce.webp';
import SpicySauce from '../assets/Sauce/spicy.webp';
import BarbequeSauce from '../assets/Sauce/barbeque.webp';
import GarlicSauce from '../assets/Sauce/garlic.webp'
import DeepPan from '../assets/Base/thick-dough.webp';
import Authentic from '../assets/Base/thin-dough.webp';

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