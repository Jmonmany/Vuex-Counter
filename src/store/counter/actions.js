import getRandomly from "../.././helpers/getRandom";

export const incrementRandomly = async (context) => {
  context.commit("setLoading", true);
  const random = await getRandomly();
  context.commit("incrementBy", random);
  context.commit("setLoading", false);
};
