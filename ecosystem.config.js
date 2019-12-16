/*
 * PM2 ecosystem
 * pm2 start ecosystem.config.js --env production
 */

module.exports = {
  apps: [{
    name: 'emdis-status',
    script: 'emdis-status.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '100M',
    env: {
      NODE_ENV: 'development',
      DEBUG: '*, -snapdragon:* -nodemon* -express:* -body-parser:* -send -axm:* -require-in* -axon:* -pm2:* -interactor:*'
    },
    env_production: {
      NODE_ENV: 'production',
      DEBUG: '*, -snapdragon:* -nodemon* -express:* -body-parser:* -send -axm:* -require-in* -axon:* -pm2:* -interactor:*'
    }
  }]
};
