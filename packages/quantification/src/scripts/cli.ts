#!/usr/bin/env ts-node

import * as fs from 'node:fs';

import * as yargs from 'yargs';

import {
  getQuantificationSummaries,
  getQuantificationSummary,
} from '../quantification';

const quantificationArgs = (yargs: yargs.Argv): yargs.Argv => {
  yargs.positional('input', {
    type: 'string',
    describe: 'the soil metrics output file',
  });
  yargs.options('maxGrandfatherableYears', {
    type: 'number',
    default: 4,
    describe: 'maximum number of grandfatherable years for the project.',
  });
  return yargs;
};

yargs
  .scriptName('quantify')
  .usage('$0 <cmd> [args]')
  .command(
    'multi [input]',
    'Runs Nori quantification logic on a multi-field (i.e. python) results file.',
    quantificationArgs,
    (argv) => {
      const data = fs.readFileSync(argv.input as string, 'utf8');
      const results = getQuantificationSummaries({
        data: JSON.parse(data),
        maxNumberOfGrandfatheredYears: argv.maxGrandfatherableYears as number,
      });
      console.log(JSON.stringify(results, null, 4));
    }
  )
  .command(
    'single [input]',
    'Runs Nori quantification logic on a single-field (i.e. sheets) results file.',
    (yargs) => {
      quantificationArgs(yargs).options('quantifyAsOfYear', {
        type: 'number',
        describe:
          'Force the year to grandfather as of. Defaults to the current year',
      });
    },
    (argv) => {
      const data = fs.readFileSync(argv.input as string, 'utf8');
      const results = getQuantificationSummary({
        data: JSON.parse(data),
        maxNumberOfGrandfatheredYears: argv.maxGrandfatherableYears as number,
        quantifyAsOfYear: argv.quantifyAsOfYear as number,
      });
      console.log(JSON.stringify(results, null, 4));
    }
  )
  .demandCommand(2)
  .strict()
  .help().argv;
