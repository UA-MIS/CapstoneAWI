import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
    image: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Personal Flotation Devices",
            description: "Vessels less than 4.9 meters (16 feet) in length will have aboard a type I, II, III, or V personal flotation device for each person."
             + "Vessels 4.9 meters (16 feet) and over in length shall have aboard a type I, II, III, or V personal flotation device for each person and at least one type IV on board as well as a throwable device."
             + "Each person operating, riding on, or being towed by a personal watercraft must wear a personal flotation device approved by the U.S. Coast Guard. \n \n" 
             + "All persons under eight (8) years of age, on any vessel, must, at all times, wear a U.S. Coast Guard approved personal flotation device that must be strapped, snapped, or zipped securely in place; except, that no personal flotation device should be required when inside an enclosed cabin or enclosed sleeping space. \n \n \n \n"
             + "CAUTION: \n \n" + "Personal flotation devices must be accessible and of the proper size. Those that are torn, rotted, and damaged, lose their approval. \n \n"
             + "CAUTION: \n \n" + "A type V personal flotation device is a PFD approved for restricted uses. Type V PFD's must be worn in open boats and when on the deck of larger boats in order to be classified as U.S. Coast Guard approved.",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 2,
            name: "Flame Arrestors",
            description: "Every motorboat using gasoline as fuel, except outboard motors, shall have the carburetor or carburetors of every engine therein equipped with a U.S."
            + "Coast Guard approved flame arrestor or backfire trap.",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 3,
            name: "Emergency Cut-Off Switch",
            description: "No person shall operate or give permission to operate any vessel less than 7.3 meters (24 feet) in length, having an open cockpit and having more than fifty (50) horsepower, unless the said vessel is equipped with an emergency engine or motor shut-off switch. \n \n"
            + "The shut-off switch shall be a lanyard-type and shall be attached to the person, clothing, or personal flotation device of the operator."
            + "It shall be installed so that when any removal of the operator from the normal operating station will result in the immediate shut-off of the engine. \n \n"
            + "Any person operating a personal watercraft that does not have self-circling capabilities must have a lanyard-type engine shut-off switch, which must be attached to the person, clothing, or personal flotation device of the operator.",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 4,
            name: "Ditch Bags",
            description: "When you prepare for yours, here's what to look for: \n \n"
            + "- VHF RADIO should be waterproof like the Lowrance unit at right above. \n \n"
            + "- PLB such as the Aqualink View activates on command to communicate a position to appropriate rescuers. \n \n"
            + "- FLARES should be part of your safety kit and are required by law in most federally patrolled water. If you leave the boat, take them with you. \n \n"
            + "- STROBES like the ACR C-Strobe can save precious time when activated. \n \n"
            + "- POWERFLARE SAFETY LIGHT and strobes like this (in red case, bottom right) emit SOS or flashing lights to alert rescue personnel. \n \n"
            + "- SIGNAL MIRRORS can alert rescue personnel in bright daylight, cost practically nothing and are recommended by the USCG. \n \n"
            + "- WHISTLES are great at attracting rescue personnel when visibility is poor. \n \n"
            + "- ROPE can keep the crew together should a lifeboat not be available. \n \n"
            + "- A GERBER HINDERER serrated blunt-point knife is less likely to puncture a life raft and will make quick work of slicing ropes or bandages. \n \n"
            + "- FIRST AID KITS should include a ready supply of essential medications you may need on a frequent basis. \n \n"
            + "- DRINKING WATER should be accompanied by a measuring device to carefully apportion it to maintain lifea nd morale. \n \n"
            + "- SUNSCREEN and DRAMAMINE can ease discomfort adrift. \n \n",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 5,
            name: "Federally Controlled Waters",
            description: "Boat and PWC operators must observe federal regulations when boating on: \n"
            + "- Coastal Waters \n"
            + "- The Great Lakes \n"
            + "- Territorial Seas \n"
            + "- Waters which are two miles wide or wider and are connected to one of the above.",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 6,
            name: "Fire Extinguishers",
            description: "All vessels, as herein designated, must be equipped with a serviceable U.S. Coast Guard approved fire extinguisher of the type and capacity indicated. \n \n"
            + "1. All inboard and inboard/outboard vessels, regardless of size, and all motor vessels having closed compartments wherein portable fuel tanks are stored or having permanentely"
            + "installed fuel tanks shall have a hand portable or semi-portable fire extinguisher using carbon dioxide (CO2), foam, or other chemical ingredients such as is commonly used for"
            + "extinguishing gasoline fires or petroleum product fires. Such fire extinguisher shall be approved by the U.S. Coast Guard. \n \n"
            + "2. All vessels equipped with any butane gas, propane gas, kerosene, gasoline or petroleum product consuming device except outboard motors, such as a stove or lantern shall have a hand"
            + "portable or semi-portable fire extinguisher using carbon dioxide (CO2), foam, or other chemical ingredient such as is commonly used for extinguishing a fire produced by the use"
            + "of such device. Such fire extinguisher shall be approved by the U.S. Coast Guard. \n \n"
            + "3. All motor vessels having closed or semi-closed cabins and any vessel with sleeping accommodations shall have a hand portable fire extinguisher or semi-portable fire extinguisher"
            + "using carbon dioxide (CO2), foam, or other chemical ingredients such as is commonly used for extinguishing fires. Such fire extinguisher shall be approved by the U.S. Coast Guard. \n \n \n"
            + "*Flammable liquids include gasoline, kersosene, oil and stove alcohol.",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 7,
            name: "Diver's Flag",
            description: "The diver's flag will be at least 300 mm (12 inches) square, colored red with a white 500 mm (2 inches) stripe running diagonally from the top staff cornor to the bottom"
            + "fly corner. Boat owners will stay at least 30.5 meters (100 feet) away from the displayed flag.",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 8,
            name: "Lights and Sound Devices",
            description: "Lights \n \n \n" + "All vessels must be equipped with prescribed navigation lights when operated at night in accordance with the Boating Safety Laws. Operators of all vessels"
            + "must comply with the requirements for the type and use of lights when anchored or underway from sunset to sunrise. \n \n \n \n" + "Sound Devices \n \n \n" + "All vessels 4.9 meters (16 feet) or more"
            + "in length must have on board the proper signal device for use during nighttime operation or inclement weather where visibility is greatly reduced.",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 9,
            name: "Visual Distress Signals",
            description: "Visual Distress Signals (VDSs) allow boat operators to signal for help in the event of an emergency. \n \n" + "VDSs are classified as day signals (visible in bright sunlight), night signals (visible at night)"
            + "or both day and night signals. \n \n" + "VDSs are either pyrotechnic (smoke and flames) or non-pyrotechnic (non-combustible).",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        },
        {
            id: 10,
            name: "Coast Guard Emergency Contact",
            description: "Seventh District Command Center Number: \n \n" + "(305)-415-6800",
            image: "https://www.boatus.org/assets/img/fb-og/boating-safety/jacket-types.jpg"
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
