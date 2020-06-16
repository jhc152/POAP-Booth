export default [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_poapContractAddress',
				type: 'address',
			},
			{ internalType: 'address', name: '_validSigner', type: 'address' },
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes',
				name: '_signedMessage',
				type: 'bytes',
			},
		],
		name: 'VerifiedSignature',
		type: 'event',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'uint256', name: 'event_id', type: 'uint256' },
			{ internalType: 'address', name: 'receiver', type: 'address' },
			{ internalType: 'bytes', name: 'signedMessage', type: 'bytes' },
		],
		name: 'mintToken',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		name: 'processed',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'validSigner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
]
