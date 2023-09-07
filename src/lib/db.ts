import Dexie from 'dexie';

export interface Employee {
	id?: number;
	firstName: string;
	lastName: string;
	mail?: string | null;
	phone?: string | null;
	computerId?: number | null;
}

export interface Software {
	id?: number;
	name: string;
	version: string;
	category: string;
}

export interface Computer {
	id?: number;
	name: string;
	ipAddress?: string | null;
	macAddress?: string | null;
	memory?: number | null;
	processor?: string | null;
	motherBoard?: string | null;
	windowsVersion?: string | null;
	installationDate?: Date | null;
	monitor?: string | null;
	videoAdaptor?: string | null;
	disk1?: string | null;
	disk2?: string | null;
	remoteConnectionId?: string | null;
	remoteConnectionPass?: string | null;
	OfficeLocationId?: number | null;
	notes?: string | null;
	softwareIDs?: number[] | null;
	printerIDs?: number[] | null;
}

export interface OfficeLocation {
	id?: number;
	name: string;
}

export interface Printer {
	id?: number;
	name: string;
	ipAddress?: string | null;
	macAddress?: string | null;
	locationId: number;
}

export class LockITDatabase extends Dexie {
	employees!: Dexie.Table<Employee, number>;
	softwares!: Dexie.Table<Software, number>;
	computers!: Dexie.Table<Computer, number>;
	officeLocations!: Dexie.Table<OfficeLocation, number>;
	printers!: Dexie.Table<Printer, number>;

	constructor() {
		super('LockITDatabase');

		this.version(1).stores({
			employees: '++id, [firstName+lastName], computerId',
			softwares: '++id, name, category',
			computers: '++id, name, remoteConnectionId, locationId',
			officeLocations: '++id, name',
			printers: '++id, name, locationId'
		});

		this.employees = this.table('employees');
		this.softwares = this.table('softwares');
		this.computers = this.table('computers');
		this.officeLocations = this.table('officeLocations');
		this.printers = this.table('printers');
	}
}

export const db = new LockITDatabase();
