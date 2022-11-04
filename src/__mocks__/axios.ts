const mockResponse = {
  data: {
    results: [
      {
        name: "name",
        id: 1,
        image: "picture",
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
