const device = {
  _id: "d_1",
  device_name: "Heat and Humidity sensor",
  variables: [
    {
      _id: "v_1",
      variable_name: "Temperature",
      value: 22,
      unit: "ºC",
      histories: [
        {
          timestamp: 1668712354987,
          value: 18,
        },
        {
          timestamp: 1668717282278,
          value: 22,
        },
      ],
    },
    {
      _id: "v_2",
      variable_name: "Humidity",
      value: 90,
      unit: "%",
      histories: [
        {
          timestamp: 1668712354987,
          value: 87,
        },
        {
          timestamp: 1668717282278,
          value: 90,
        },
      ],
    },
  ],
};

export default device;
