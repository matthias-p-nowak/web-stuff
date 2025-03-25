import logging

def setup_logging():
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s.%(msecs)04d [%(levelname)s] %(filename)s:%(lineno)d(%(name)s) %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        force=True
    )

setup_logging()
logger = logging.getLogger(__name__)
logger.info('Hello, world!')