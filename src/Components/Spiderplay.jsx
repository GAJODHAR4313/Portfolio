import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

const Spiderplay = () => {
  const [spidermanX, setSpidermanX] = useState(200);
  const spidermanXRef = useRef(spidermanX);
  const [webs, setWebs] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('spiderman');

  const activeKeys = useRef(new Set());
  const gameRef = useRef(null);

  useEffect(() => {
    spidermanXRef.current = spidermanX;
  }, [spidermanX]);

  const shootWeb = () => {
    const playerWidth = 60;
    const playerHeight = 70;
    const webOffset = 20;
    const gameHeight = 400;
    const currentX = spidermanXRef.current;
    const x = currentX + playerWidth / 2 - webOffset / 2;
    const y = gameHeight - playerHeight;
    setWebs((prev) => [...prev, { x, y }]);
  };

  const restartGame = () => {
    setSpidermanX(200);
    setWebs([]);
    setEnemies([]);
    setScore(0);
    setMissed(0);
    setGameOver(false);
    setGameStarted(true);
    setPaused(false);
  };

  const togglePause = () => setPaused((prev) => !prev);

  const handleKeyDown = (e) => activeKeys.current.add(e.key.toLowerCase());
  const handleKeyUp = (e) => activeKeys.current.delete(e.key.toLowerCase());

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOver || !gameStarted || paused) return;

      if (activeKeys.current.has('n')) setSpidermanX((prev) => Math.max(prev - 10, 0));
      if (activeKeys.current.has('m')) setSpidermanX((prev) => Math.min(prev + 10, 540));
      if (activeKeys.current.has('w')) {
        shootWeb();
        activeKeys.current.delete('w');
      }
    }, 50);
    return () => clearInterval(interval);
  }, [gameOver, gameStarted, paused]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameStarted || paused) return;
      setWebs((prev) =>
        prev
          .map((web) => ({ ...web, y: web.y - (score > 5 ? 15 : 10) }))
          .filter((web) => web.y > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, [score, gameStarted, paused]);

  useEffect(() => {
    if (!gameStarted || paused || gameOver) return;
    const spawnInterval = setInterval(() => {
      const x = Math.floor(Math.random() * 540);
      setEnemies((prev) => [...prev, { x, y: 0, id: Date.now() + Math.random() }]);
    }, 2000);
    const moveInterval = setInterval(() => {
      setEnemies((prev) => prev.map((enemy) => ({ ...enemy, y: enemy.y + (score > 5 ? 5 : 3) })));
    }, 50);
    return () => {
      clearInterval(spawnInterval);
      clearInterval(moveInterval);
    };
  }, [gameStarted, paused, gameOver, score]);

  useEffect(() => {
    if (!gameStarted || paused) return;
    setEnemies((prevEnemies) =>
      prevEnemies.filter((enemy) => {
        const hit = webs.some(
          (web) =>
            web.x > enemy.x - 10 &&
            web.x < enemy.x + 50 &&
            web.y > enemy.y &&
            web.y < enemy.y + 50
        );
        if (hit) {
          setScore((prev) => prev + 1);
          return false;
        }
        return true;
      })
    );
  }, [webs, paused, gameStarted]);

  useEffect(() => {
    if (!gameStarted || paused) return;
    setEnemies((prev) =>
      prev.filter((enemy) => {
        if (enemy.y >= 400) {
          setMissed((prevMissed) => {
            const newMissed = prevMissed + 1;
            if (newMissed >= 3) setGameOver(true);
            return newMissed;
          });
          return false;
        }
        return true;
      })
    );
  }, [enemies, paused, gameStarted]);

  const themes = {
    spiderman: {
      bg: 'bg-gradient-to-br from-red-500 to-red-700',
      text: 'text-black',
      shooter: '/Images/image-removebg-preview-9 copy.png',
      player: '/Images/cursor.png',
      bgImage: '/Images/bg.avif',
      enemy: '/Images/goblin.png',
    },
    ironman: {
      bg: 'bg-gradient-to-br from-[#8B0000] to-[#8B0000]',
      text: 'text-black',
      shooter: 'Images/image-removebg-preview-14.png',
      player: 'Images/image-removebg-preview-13.png',
      bgImage: 'Images/avengers-tower-turned-watchtower-custom-thunderbolts-image.avif',
      enemy: 'Images/image-removebg-preview-18.png',
    },
    thor: {
      bg: 'bg-gradient-to-br from-blue-900 to-gray-500',
      text: 'text-black',
      shooter: 'Images/image-removebg-preview-11.png',
      player: 'Images/image-removebg-preview-19 copy.png',
      bgImage: 'Images/Asgard_on_Loki.webp',
      enemy: 'Images/image-removebg-preview-12.png',
    },
  };

  const titles = {
    spiderman: 'Spider🕷️Shooter',
    ironman: 'Iron🤖Shooter',
    thor: 'Thor⚡Shooter',
  };

  const theme = themes[selectedTheme];

  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center ${theme.bg} ${theme.text} relative overflow-hidden`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center px-2">{titles[selectedTheme]}</h1>

      <div
        ref={gameRef}
        className="relative w-[95vw] max-w-[600px] h-[65vh] max-h-[400px] border-4 border-black rounded-lg shadow-lg overflow-hidden"
        onClick={shootWeb}
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[2px] scale-110"
          style={{ backgroundImage: `url('${theme.bgImage}')` }}
        />

        <div className="absolute inset-0">
          <img
            src={theme.player}
            alt="Player"
            className="absolute w-[60px] h-[70px] transition-all duration-75"
            style={{ left: spidermanX, bottom: '0px' }}
          />

          {webs.map((web, idx) => (
            <img
              key={idx}
              src={theme.shooter}
              alt="Web"
              className="absolute w-[20px] h-[30px] pointer-events-none"
              style={{ left: web.x, top: web.y }}
            />
          ))}

          {enemies.map((enemy) => (
            <img
              key={enemy.id}
              src={theme.enemy}
              alt="Enemy"
              className="absolute w-[70px] h-[70px] transition-all duration-75"
              style={{ left: enemy.x, top: enemy.y }}
            />
          ))}

          <div className="absolute top-2 right-3 text-white bg-black/60 px-3 py-1 text-sm rounded">
            Score: {score} | Missed: {missed}/3
          </div>

          {gameStarted && !gameOver && (
            <button
              onClick={togglePause}
              className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
            >
              {paused ? 'Play' : 'Pause'}
            </button>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white">
              <h2 className="text-2xl font-bold mb-4">Game Over</h2>
              <button
                onClick={restartGame}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
              >
                Restart
              </button>
            </div>
          )}

          {!gameStarted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <button
                onClick={() => setGameStarted(true)}
                className="bg-green-600 hover:bg-green-700 text-white text-xl px-6 py-3 rounded"
              >
                Start Game
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex mt-4 gap-4 md:hidden">
        <img
          src="Images/left.png"
          alt="Left"
          className="w-10 h-10 cursor-pointer"
          onClick={() => setSpidermanX((prev) => Math.max(prev - 20, 0))}
        />
        <img
          src="Images/suoo.png"
          alt="Shoot"
          className="w-10 h-10 cursor-pointer"
          onClick={shootWeb}
        />
        <img       
          src="Images/right.png"
          alt="Right"
          className="w-10 h-10 cursor-pointer"
          onClick={() => setSpidermanX((prev) => Math.min(prev + 20, 540))}
        />
      </div>

      <p className="text-sm mt-2 px-3 text-center hidden md:block">
        [ Controls: N = Left, M = Right, W = Shoot ]
      </p>

      <div className="mt-4 flex gap-6">
        <img
          src="Images/image-removebg-preview-17 copy.png"
          alt="Spider-Man"
          className="w-12 h-12 md:w-16 md:h-16 cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => setSelectedTheme('spiderman')}
        />
        <img
          src="Images/image-removebg-preview-15.png"
          alt="Iron Man"
          className="w-12 h-12 md:w-16 md:h-16 cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => setSelectedTheme('ironman')}
        />
        <img
          src="Images/image-removebg-preview-16.png"
          alt="Thor"
          className="w-12 h-12 md:w-16 md:h-16 cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => setSelectedTheme('thor')}
        />
      </div>
    </div>
  );
};

export default Spiderplay;