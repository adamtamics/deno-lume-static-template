import lume from "lume/mod.ts";

const site = lume({
  server: {
    port: 3050,
  },
  dest: "./output"
});

export default site;
