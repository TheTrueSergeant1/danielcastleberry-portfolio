import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiTerminal, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

// --- MOCK FILE SYSTEM ---
// This structure defines what "files" exist in your terminal
const fileSystem = {
  '~': {
    type: 'dir',
    children: {
      'about.txt': { 
        type: 'file', 
        content: 'Daniel Castleberry.\nCybersecurity Student. Blue Team Aspirant.\nPassionate about Malware Analysis and Network Defense.' 
      },
      'resume.pdf': { 
        type: 'link', 
        href: '/resume.pdf' 
      },
      'projects': {
        type: 'dir',
        children: {
          'localchat-pro': { type: 'link', href: '/projects/localchat', desc: 'Secure Node.js/WebSocket Chat App' },
          'prestige-rentals': { type: 'link', href: '/projects/rentals', desc: 'Full Stack Secure DB Project' },
          'homelab': { type: 'link', href: '/homelab', desc: 'Air-gapped malware detonation lab' },
          'portfolio-v2': { type: 'link', href: '/projects/portfolio', desc: 'This website source code' }
        }
      },
      'socials': {
        type: 'dir',
        children: {
          'github': { type: 'link', href: 'https://github.com/TheTrueSergeant1' },
          'linkedin': { type: 'link', href: 'https://www.linkedin.com/in/daniel-castleberry-022395281/' },
          'email': { type: 'link', href: 'mailto:dancastlbusiness@gmail.com' }
        }
      },
      'secrets': {
        type: 'dir',
        children: {
          'flag.txt': { type: 'file', content: 'CTF{Y0u_F0und_Th3_Easter_Egg_G00d_J0b}' }
        }
      }
    }
  }
};

const Terminal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]); // Command history
  const [historyPointer, setHistoryPointer] = useState(-1); // For Up/Down arrow navigation
  const [output, setOutput] = useState([
    { type: 'info', content: 'Initializing DC-OS v2.0...' },
    { type: 'success', content: 'System Verified. Connection Secure.' },
    { type: 'info', content: 'Type "help" to see available commands.' }
  ]);
  const [currentDir, setCurrentDir] = useState(['~']); // Current path as array
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom whenever output changes
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [output, isOpen, isMaximized]);

  if (!isOpen) return null;

  // --- HELPER: Resolve Directory Object from Path ---
  const getDir = (pathArray = currentDir) => {
    let current = fileSystem['~'];
    // Traverse the file system object based on the path array
    for (let i = 1; i < pathArray.length; i++) {
      if (current.children && current.children[pathArray[i]]) {
        current = current.children[pathArray[i]];
      } else {
        return null; // Invalid path
      }
    }
    return current;
  };

  // --- COMMAND LOGIC ---
  const executeCommand = async (cmdString) => {
    const trimmed = cmdString.trim();
    if (!trimmed) return;

    // 1. Push the user's command to the display output
    const newOutput = [...output, { 
      type: 'command', 
      content: `user@dc-portfolio:${currentDir.join('/')}$ ${trimmed}` 
    }];
    
    // 2. Parse Command
    const [cmd, ...args] = trimmed.split(' ');
    const arg = args[0];

    // Helper to push lines to the LOCAL output array before updating state
    const print = (text, type = 'text') => newOutput.push({ type, content: text });

    switch (cmd.toLowerCase()) {
      case 'help':
        print('Available Commands:', 'info');
        print('  ls            List contents of current directory');
        print('  cd [dir]      Change directory (Use .. to go back)');
        print('  cat [file]    Read content of a text file');
        print('  open [link]   Open a project or external link');
        print('  clear         Clear the terminal screen');
        print('  whoami        Display current user info');
        print('  nmap [ip]     (Sim) Network scan');
        print('  matrix        (Sim) Digital rain effect');
        print('  sudo [cmd]    Try to execute as root');
        print('  exit          Close terminal');
        break;

      case 'ls':
      case 'll':
        const dir = getDir();
        if (dir && dir.children) {
          const items = Object.keys(dir.children).map(key => {
            const item = dir.children[key];
            const isDir = item.type === 'dir';
            // Return HTML string for colorful output
            return `<span class="${isDir ? 'text-blue-400 font-bold' : 'text-green-300'}">${key}${isDir ? '/' : ''}</span>`;
          }).join('  ');
          print(items, 'html');
        } else {
          print('Directory is empty.', 'text');
        }
        break;

      case 'cd':
        if (!arg || arg === '~') {
          setCurrentDir(['~']);
          navigate('/'); // Reset to home
        } else if (arg === '..') {
          if (currentDir.length > 1) {
            const newPath = [...currentDir];
            newPath.pop(); // Remove last directory
            setCurrentDir(newPath);
          }
        } else {
          const current = getDir();
          if (current.children[arg] && current.children[arg].type === 'dir') {
            setCurrentDir([...currentDir, arg]);
          } else {
            print(`cd: ${arg}: No such directory`, 'error');
          }
        }
        break;

      case 'cat':
        if (!arg) {
          print('Usage: cat [filename]', 'warning');
        } else {
          const dir = getDir();
          if (dir.children[arg]) {
            const file = dir.children[arg];
            if (file.type === 'file') {
              print(file.content, 'text');
            } else if (file.type === 'link') {
              print(`Link to: ${file.href} (Type 'open ${arg}' to visit)`, 'info');
            } else {
              print(`cat: ${arg}: Is a directory`, 'error');
            }
          } else {
            print(`cat: ${arg}: No such file`, 'error');
          }
        }
        break;

      case 'open':
        if (!arg) {
          print('Usage: open [filename]', 'warning');
        } else {
          const dirObj = getDir();
          if (dirObj.children[arg] && dirObj.children[arg].type === 'link') {
            const link = dirObj.children[arg].href;
            if (link.startsWith('http')) {
              window.open(link, '_blank');
              print(`Opening external link: ${link}...`, 'success');
            } else {
              navigate(link);
              print(`Navigating to ${link}...`, 'success');
            }
          } else {
            print(`Cannot open ${arg}. Is it a link?`, 'error');
          }
        }
        break;

      case 'whoami':
        print('uid=1000(guest) gid=1000(guest) groups=1000(guest),27(sudo)', 'success');
        break;

      case 'sudo':
        print(`[sudo] password for guest: `, 'text');
        setTimeout(() => {
           setOutput(prev => [...prev, { type: 'error', content: 'Sorry, user guest is not allowed to execute commands as root on dc-portfolio.' }]);
        }, 1000);
        break;

      case 'clear':
        setOutput([]);
        return; 

      case 'exit':
        onClose();
        return;

      // --- SIMULATION COMMANDS ---
      case 'nmap':
        const target = arg || '127.0.0.1';
        print(`Starting Nmap 7.94 at ${new Date().toLocaleTimeString()}`, 'text');
        print(`Nmap scan report for ${target}`, 'text');
        print('Host is up (0.00034s latency).', 'text');
        print('Not shown: 996 closed tcp ports (reset)', 'text');
        print('PORT     STATE SERVICE', 'warning');
        
        // Simulate a delay for realism
        setTimeout(() => {
          setOutput(prev => [
            ...prev,
            { type: 'text', content: '22/tcp   open  ssh' },
            { type: 'text', content: '80/tcp   open  http' },
            { type: 'text', content: '443/tcp  open  https' },
            { type: 'success', content: 'Nmap done: 1 IP address (1 host up) scanned in 1.4 seconds' }
          ]);
        }, 800);
        break;

      case 'matrix':
        print('Wake up, Neo...', 'success');
        let count = 0;
        const matrixInterval = setInterval(() => {
          const line = Array(Math.floor(Math.random() * 60) + 20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('');
          setOutput(prev => [...prev, { type: 'matrix', content: line }]);
          count++;
          if (count > 15) clearInterval(matrixInterval);
        }, 100);
        break;

      default:
        print(`Command not found: ${cmd}. Type 'help' for options.`, 'error');
    }

    // Update state with the new buffer
    setOutput(newOutput);
  };

  // --- KEYBOARD HANDLERS (History & Tab) ---
  const handleKeyDown = (e) => {
    // 1. History Navigation (Up/Down)
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyPointer + 1;
        if (newIndex < history.length) {
          setHistoryPointer(newIndex);
          setInput(history[history.length - 1 - newIndex]);
        }
      }
    } 
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer > 0) {
        const newIndex = historyPointer - 1;
        setHistoryPointer(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryPointer(-1);
        setInput('');
      }
    } 
    // 2. Tab Completion
    else if (e.key === 'Tab') {
      e.preventDefault();
      const currentInput = input.trim();
      if (!currentInput) return;

      const availableCommands = ['help', 'ls', 'cd', 'cat', 'open', 'whoami', 'clear', 'exit', 'nmap', 'sudo', 'matrix'];
      const dir = getDir();
      const availableFiles = dir && dir.children ? Object.keys(dir.children) : [];
      const allOptions = [...availableCommands, ...availableFiles];
      
      const parts = currentInput.split(' ');
      const lastPart = parts[parts.length - 1]; // The word currently being typed
      
      let matches = [];
      // If typing the first word, match commands
      if (parts.length === 1) {
        matches = availableCommands.filter(c => c.startsWith(lastPart));
      } 
      // If typing subsequent words, match files in current dir
      else {
        matches = availableFiles.filter(f => f.startsWith(lastPart));
      }

      if (matches.length === 1) {
        // Complete the word
        parts.pop();
        setInput([...parts, matches[0]].join(' ') + ' ');
      }
    }
    // 3. Submit Command
    else if (e.key === 'Enter') {
      setHistory(prev => [...prev, input]);
      setHistoryPointer(-1);
      executeCommand(input);
      setInput('');
    }
  };

  return (
    <div className={`fixed z-[100] transition-all duration-300 ${isMaximized ? 'inset-0' : 'inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'}`}>
      
      <div className={`
        flex flex-col overflow-hidden bg-[#0d1117]/95 text-gray-300 font-mono text-sm shadow-2xl border border-cyber-border
        ${isMaximized ? 'w-full h-full rounded-none' : 'w-full max-w-4xl h-[600px] rounded-xl'}
      `}>
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-2 border-b border-cyber-border select-none">
          <div className="flex items-center gap-2">
            <FiTerminal className="text-cyber-accent" />
            <span className="font-bold text-gray-100">
              user@dc-portfolio:~{currentDir.length > 1 ? '/' + currentDir.slice(1).join('/') : ''}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMaximized(!isMaximized)} className="hover:text-white text-gray-500 transition-colors">
              {isMaximized ? <FiMinimize2 /> : <FiMaximize2 />}
            </button>
            <button onClick={onClose} className="hover:text-red-500 text-gray-500 transition-colors"><FiX /></button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div 
          className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar scroll-smooth" 
          onClick={() => inputRef.current?.focus()}
        >
          {output.map((line, i) => (
            <div key={i} className="break-words leading-tight">
              {line.type === 'command' && <span className="text-gray-500 mr-2">➜</span>}
              
              {line.type === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: line.content }} />
              ) : (
                <span className={`
                  ${line.type === 'command' ? 'text-white font-bold' : ''}
                  ${line.type === 'error' ? 'text-red-400' : ''}
                  ${line.type === 'success' ? 'text-green-400' : ''}
                  ${line.type === 'warning' ? 'text-yellow-400' : ''}
                  ${line.type === 'info' ? 'text-blue-400' : ''}
                  ${line.type === 'matrix' ? 'text-green-500 font-bold opacity-80 font-matrix' : ''}
                `}>
                  {line.content}
                </span>
              )}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-400 font-bold">
              user@dc-portfolio:{currentDir.length > 1 ? '/' + currentDir.slice(1).join('/') : '~'}$
            </span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-700"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;