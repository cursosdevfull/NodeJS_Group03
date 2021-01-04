import { MedicUseCase } from '../../src/medic/application/medic.usecase';
import { MedicOperation } from '../../src/medic/infraestructure/medic.operation';
import medicMock from '../mocks/medic.mock.json';

let medicOperation;
let medicUseCase: any;

describe('medic.usecase', () => {
	beforeAll(() => {
		(MedicOperation as jest.Mock) = jest.fn().mockReturnValue({
			insert: jest.fn().mockResolvedValue(medicMock[0]),
			getAll: jest.fn().mockResolvedValue(medicMock),
			getById: jest.fn().mockResolvedValue(medicMock[1]),
			getByPage: jest.fn().mockResolvedValue(medicMock.slice(0, 3)),
			update: jest.fn().mockResolvedValue(medicMock[0]),
			delete: jest.fn().mockResolvedValue(medicMock[0]),
		});

		medicOperation = new MedicOperation();
		medicUseCase = new MedicUseCase(medicOperation);
	});

	/*     beforeEach(() => {
		dock('Se ejecuta antes de cada test');
	}); */

	it('insert', async () => {
		const result = await medicUseCase.insert(medicMock[0]);
		expect(result).toEqual(medicMock[0]);
	});

	it('getAll', async () => {
		const result = await medicUseCase.getAll(true);
		expect(result).toEqual(medicMock);
	});

	it('getOne', async () => {
		const result = await medicUseCase.getOne(1);
		expect(result).toEqual(medicMock[1]);
	});

	it('getByPage', async () => {
		const result = await medicUseCase.getByPage(3);
		expect(result).toEqual(medicMock.slice(0, 3));
	});

	it('update', async () => {
		const result = await medicUseCase.update(1, medicMock[0]);
		expect(result).toEqual(medicMock[0]);
	});

	it('delete', async () => {
		const result = await medicUseCase.delete(1);
		expect(result).toEqual(medicMock[0]);
	});
});
