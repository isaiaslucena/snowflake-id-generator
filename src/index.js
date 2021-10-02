import * as http from "http";
import { SnowflakeIdGenerator } from "snowflake-id-generator";

const generator = new SnowflakeIdGenerator();

http
  .createServer((req, res) => {
    const snowflakeid = `<h1>${generator.next().toString()}<h1>`;

    res.write(snowflakeid);
    res.end();
  })
  .listen(8080);
