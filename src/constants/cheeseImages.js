import BasicCheese from '../assets/Cheese/grated-cheese.webp';
import Mozzarella from '../assets/Cheese/mozzarella.webp';
import Basil from '../assets/Topping/Basil.webp';
import Mushroom from '../assets/Topping/Mushroom.webp';
import Olive from '../assets/Topping/Olive.webp';
import Pineapple from '../assets/Topping/Pineapple.webp';
import Tomato from '../assets/Topping/Tomato.webp';
import Broccoli from '../assets/Topping/broccolis.webp';
import Carrot from '../assets/Topping/carrots.webp';
import Eggplant from '../assets/Topping/eggplants.webp';
import Bacon from '../assets/Topping/bacon.webp';
import Corn from '../assets/Topping/corn.webp';
import Onion from '../assets/Topping/onion.webp';
import Pepper from '../assets/Topping/pepper.webp';
import Pepperoni from '../assets/Topping/pepperoni.webp';
import Shrimp from '../assets/Topping/scampi.webp';
import Chicken from '../assets/Topping/chicken.webp';
import ChickenOne from '../assets/Topping/chicken-one.webp';
import CurrySauce from '../assets/Sauce/curry.webp';
import PestoSauce from '../assets/Sauce/pesto.webp';
import TomatoSauce from '../assets/Sauce/tomato-sauce.webp'; 
import SpicySauce from '../assets/Sauce/spicy.webp';
import BarbequeSauce from '../assets/Sauce/barbeque.webp';
import GarlicSauce from '../assets/Sauce/garlic.webp'
import DeepPan from '../assets/Base/thick-dough.webp';
import Authentic from '../assets/Base/thin-dough.webp';

export default [
    { src: BasicCheese, src2: BasicCheese, name: "cheese", zIndex: "z5", category: "cheese", price: 0.5 },
    { src: Mozzarella, src2: Mozzarella, name: "mozzarella", zIndex: "z5", category: "cheese", price: 0.5 },
    { src: Basil, name: "basil", zIndex: "z5", category: "topping", price: 0 },
    { src: Mushroom,  name: "mushroom", zIndex: "z4", category: "topping", price: 0.5 },
    { src: Olive, name: "olive", zIndex: "z3", category: "topping", price: 0.5 },
    { src: Pineapple, name: "pineapple", zIndex: "z3", category: "topping", price: 0.5 },
    { src: Tomato, name: "tomato", zIndex: "z4", category: "topping", price: 0.5 },
    { src: Broccoli, name: "broccoli", zIndex: "z4", category: "topping", price: 0.5 },
    { src: Carrot, name: "carrot", zIndex: "z4", category: "topping", price: 0.5 },
    { src: Bacon, name: "bacon", zIndex: "z4", category: "topping", price: 0.5 },
    { src: Corn, name: "corn", zIndex: "z4", category: "topping", price: 0.5 },
    { src: Onion, name: "onion", zIndex: "z4", category: "topping", price: 0.5 },
    { src: Pepper, name: "chili", zIndex: "z3", category: "topping", price: 0.5 },
    { src: Pepperoni, name: "pepperoni", zIndex: "z3", category: "topping", price: 0.5 },
    { src: Shrimp, name: "shrimp", zIndex: "z3", category: "topping", price: 1 },
    { src: Eggplant, name: "eggplant", zIndex: "z3", category: "topping", price: 0.5 },
    { src: Chicken, src2: ChickenOne, name: "chicken", zIndex: "z3", category: "topping", price: 0.5 },
    { src: TomatoSauce, name: "tomatoSauce", zIndex: "z2", category: "sauce", price: 0 },
    { src: BarbequeSauce, name: "barbeque", zIndex: "z2", category: "sauce", price: 0 },
    { src: CurrySauce, name: "curry", zIndex: "z2", category: "sauce", price: 0 },
    { src: PestoSauce, name: "pesto", zIndex: "z2", category: "sauce", price: 0 },
    { src: GarlicSauce, src2: GarlicSauce, name: "garlic", zIndex: "z2", category: "sauce", price: 0 },
    { src: SpicySauce, name: "spicy", zIndex: "z2", category: "sauce", price: 0 },
    { src: DeepPan, name: "Deeppan", zIndex: "z1", category: "base", price: 7 },
    { src: Authentic, name: "Authentic", zIndex: "z1", category: "base", price: 7 },
]