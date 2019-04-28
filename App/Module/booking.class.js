/**
 * 
 * Booking class
 * 
 * slot description
 * cityId - 
 * checkinDate - date in YYYY-MM-DD format
 * checkoutDate - date in YYYY-MM-DD format
 * rooms - Object - key:  { adult: Number, child: Number }
 */

class Booking {
    constructor() {
        this.slot = this.getInitialSlot();
    }

    getInitialSlot() {
        return {
            cityId: null,
            checkinDate: null,
            checkoutDate: null,
            rooms: {
                0: {
                    adult: 2,
                    child: 0
                }
            },
        }
    }

    reset() {
        this.slot = this.getInitialSlot();
    }

    setCity(cityId) {
        this.slot.cityId = cityId;
    }

    setCheckinDate(date) {
        this.slot.checkinDate = date;
    }

    setCheckoutDate(date) {
        this.slot.checkinDate = date;
    }

    addRoom() {
        const newRoom = {
            adult: 1,
            child: 0
        }

        this.slot.rooms[Object.keys(this.slot.rooms).length + 1] = newRoom;
        return this.slot.rooms;
    }

    removeRoom(index) {
        if (index == 0) {
            console.warn('Invalid operation');
            return;
        }

        this.slot.rooms[index] = undefined;
    }

    /**
     * @param  {} roomId
     * @param  {} type
     */
    addPerson(roomId, type) {
        const room = this.slot.rooms[roomId];
        this.slot.rooms[roomId][type] = room[type] + 1;
        return this.slot.rooms;
    }

    /**
     * @param  {} roomId
     * @param  {} type - 'adult' or 'child'
     */
    removePerson(roomId, type) {
        const room = this.slot.rooms[roomId];
        this.slot.rooms[roomId][type] = room[type] - 1;
        return this.slot.rooms;
    }
}