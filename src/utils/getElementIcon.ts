import Psy_Icon_P5 from '../assets/P5_Icons/Psy_Icon_P5.webp'
import Elec_Icon_P5 from '../assets/P5_Icons/Elec_Icon_P5.webp'
import Fire_Icon_P5 from '../assets/P5_Icons/Fire_Icon_P5.webp'
import Ice_Icon_P5 from '../assets/P5_Icons/Ice_Icon_P5.webp'
import Wind_Icon_P5 from '../assets/P5_Icons/Wind_Icon_P5.webp'
import Bless_Icon_P5 from '../assets/P5_Icons/Bless_Icon_P5.webp'
import Curse_Icon_P5 from '../assets/P5_Icons/Curse_Icon_P5.webp'
import Nuke_Icon_P5 from '../assets/P5_Icons/Nuke_Icon_P5.webp'
import Phys_Icon_P5 from '../assets/P5_Icons/Phys_Icon_P5.webp'
import Ranged_Icon_P5 from '../assets/P5_Icons/Ranged_Icon_P5.webp'
import Almighty_Icon_P5 from '../assets/P5_Icons/Almighty_Icon_P5.webp'
import Ailment_Icon_P5 from '../assets/P5_Icons/Ailment_Icon_P5.webp'
import Healing_Icon_P5 from '../assets/P5_Icons/Healing_Icon_P5.webp'


const iconMapping: { [key: string]: string } = {
    Psy: Psy_Icon_P5,
    Elec: Elec_Icon_P5,
    Fire: Fire_Icon_P5,
    Ice: Ice_Icon_P5,
    Wind: Wind_Icon_P5,
    Bless: Bless_Icon_P5,
    Curse: Curse_Icon_P5,
    Nuke: Nuke_Icon_P5,
    Phys: Phys_Icon_P5,
    Ranged: Ranged_Icon_P5,
    Almighty: Almighty_Icon_P5,
    Ailment: Ailment_Icon_P5,
    Healing: Healing_Icon_P5,
};

function capitalizeFirstLetter(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getElementIcon(element: string): string {
    const elementName = capitalizeFirstLetter(element);
    return iconMapping[elementName] || ''; // Return the icon path or an empty string if not found
}