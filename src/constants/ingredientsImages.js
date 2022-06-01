import Basil from '../assets/Topping/Basil.webp';
import Mushroom from '../assets/Topping/Mushroom.webp';
import Olive from '../assets/Topping/Olive.webp';
import Pineapple from '../assets/Topping/Pineapple.webp';
import Tomato from '../assets/Topping/Tomato.webp';
import Brocoli from '../assets/Topping/broccolis.webp';
import Carrot from '../assets/Topping/carrots.webp';
import Eggplant from '../assets/Topping/eggplants.webp';
import CurrySauce from '../assets/Sauce/curry.webp';
import PestoSauce from '../assets/Sauce/pesto.webp';
import TomatoSauce from '../assets/Sauce/tomato.webp';
import SpicySauce from '../assets/Sauce/spicy.webp';
import EmptyBase from '../assets/Base/PizzaBaseEmpty.webp';

export default [
    { src: Basil, name: "basil", zIndex: "z5", category: "topping" },
    { src: Mushroom, name: "mushroom", zIndex: "z4", category: "topping" },
    { src: Olive, name: "olive", zIndex: "z3", category: "topping" },
    { src: Pineapple, name: "pineapple", zIndex: "z3", category: "topping" },
    { src: Tomato, name: "tomato", zIndex: "z4", category: "topping" },
    { src: Brocoli, name: "brocoli", zIndex: "z4", category: "topping" },
    { src: Carrot, name: "carrot", zIndex: "z4", category: "topping" },
    { src: Eggplant, name: "eggplant", zIndex: "z4", category: "topping" },
    { src: CurrySauce, name: "curry", zIndex: "z2", category: "sauce" },
    { src: PestoSauce, name: "pesto", zIndex: "z2", category: "sauce" },
    { src: TomatoSauce, name: "tomatoSauce", zIndex: "z2", category: "sauce" },
    { src: SpicySauce, name: "spicy", zIndex: "z2", category: "sauce" },
    { src: EmptyBase, name: "emptybase", zIndex: "z1", category: "base" },
]