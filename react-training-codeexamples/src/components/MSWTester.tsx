import { useEffect, useState } from 'react';

interface MockTestResponse {
  error: string;
  total: string;
  books: any[];
}

const MSWTester = () => {
  const [data, setData] = useState<MockTestResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testMSW = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('🧪 Testing MSW mock...');
      const response = await fetch('https://api.itbook.store/1.0/new');
      const result = await response.json();
      console.log('📚 MSW Response:', result);
      setData(result);
    } catch (err) {
      console.error('❌ MSW Test failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-test on component mount
    testMSW();
  }, []);

  return (
    <div style={{ 
      border: '2px solid #007bff', 
      padding: '16px', 
      margin: '16px 0',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>🧪 MSW Mock Test</h3>
      
      <button 
        onClick={testMSW} 
        disabled={loading}
        style={{
          padding: '8px 16px',
          marginBottom: '12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test MSW Mock'}
      </button>

      {loading && <p>🔄 Loading...</p>}
      
      {error && (
        <div style={{ color: 'red', marginBottom: '12px' }}>
          <strong>❌ Error:</strong> {error}
        </div>
      )}

      {data && (
        <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '4px' }}>
          <strong>✅ MSW Mock Working!</strong>
          <pre style={{ 
            fontSize: '12px', 
            marginTop: '8px',
            overflow: 'auto',
            maxHeight: '200px'
          }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MSWTester;